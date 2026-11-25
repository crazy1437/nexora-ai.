import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const allowedServices = [
  "AI Workflow Automation",
  "Smart Lead Management",
  "Business Website Development",
  "API & System Integrations",
  "Other / Not sure yet",
];

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // Honeypot: silently accept bot submissions without storing them.
    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ success: true });
    }

    const full_name =
      typeof body.full_name === "string" ? body.full_name.trim() : "";
    const company =
      typeof body.company === "string" ? body.company.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const whatsapp =
      typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";
    const service =
      typeof body.service === "string" ? body.service.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (
      !full_name ||
      full_name.length > 100 ||
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      company.length > 150 ||
      whatsapp.length > 30 ||
      !allowedServices.includes(service) ||
      !message ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please check your details and try again." },
        { status: 400 }
      );
    }

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables are missing.");
      return NextResponse.json(
        { error: "The enquiry service is temporarily unavailable." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("enquiries").insert({
      full_name,
      company: company || null,
      email,
      whatsapp: whatsapp || null,
      service,
      message,
      status: "New",
    });

    if (error) {
      console.error("Supabase enquiry insert failed:", error.message);
      return NextResponse.json(
        { error: "We couldn't submit your enquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}
