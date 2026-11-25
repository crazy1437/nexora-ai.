
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Enquiry = {
  id: string;
  full_name: string;
  company: string | null;
  email: string;
  whatsapp: string | null;
  service: string;
  message: string;
  status: "New" | "Contacted" | "Closed";
  created_at: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadDashboard() {
      const { data: { user }, error: authError } =
        await supabase.auth.getUser();

      if (authError || !user) {
        router.replace("/admin");
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!active) return;

      if (fetchError) {
        setError("Unable to load enquiries. Please refresh the page.");
      } else {
        setEnquiries((data || []) as Enquiry[]);
      }

      setLoading(false);
    }

    loadDashboard();

    return () => {
      active = false;
    };
  }, [router]);

  async function updateStatus(id: string, status: Enquiry["status"]) {
    setError("");

    const { error: updateError } = await supabase
      .from("enquiries")
      .update({ status })
      .eq("id", id);

    if (updateError) {
      setError("Could not update this enquiry. Please try again.");
      return;
    }

    setEnquiries((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/admin");
  }

  const filtered = enquiries.filter(
    (item) => filter === "All" || item.status === filter
  );

  const counts = {
    All: enquiries.length,
    New: enquiries.filter((item) => item.status === "New").length,
    Contacted: enquiries.filter((item) => item.status === "Contacted").length,
    Closed: enquiries.filter((item) => item.status === "Closed").length,
  };

  return (
    <main className="min-h-screen bg-[#08080b] px-6 py-10 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-8">
          <div>
            <p className="text-xs tracking-[.35em] text-red-400">
              NEXORA AI
            </p>
            <h1 className="mt-3 text-3xl font-semibold">
              Enquiries Dashboard
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Manage your incoming business leads.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full border border-white/15 px-5 py-3 text-sm hover:border-red-500"
          >
            Sign Out
          </button>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(["All", "New", "Contacted", "Closed"] as const).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-2xl border p-6 text-left transition ${
                filter === item
                  ? "border-red-500 bg-red-500/10"
                  : "border-white/10 bg-white/[.03]"
              }`}
            >
              <p className="text-sm text-gray-400">{item} enquiries</p>
              <p className="mt-3 text-3xl font-semibold">{counts[item]}</p>
            </button>
          ))}
        </section>

        {error && (
          <p role="alert" className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </p>
        )}

        <section className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">
              Customer enquiries
            </h2>
            <p className="text-sm text-gray-500">
              Showing {filtered.length} of {enquiries.length}
            </p>
          </div>

          {loading ? (
            <p className="mt-8 text-gray-400">Loading enquiries...</p>
          ) : filtered.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[.03] p-10 text-center">
              <p className="text-gray-400">No enquiries found.</p>
            </div>
          ) : (
            <div className="mt-6 space-y-5">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/[.03] p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.full_name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        {item.company || "Independent enquiry"}
                      </p>
                    </div>

                    <select
                      value={item.status}
                      onChange={(event) =>
                        updateStatus(
                          item.id,
                          event.target.value as Enquiry["status"]
                        )
                      }
                      className="rounded-lg border border-white/10 bg-[#15151b] px-4 py-3 text-sm text-white outline-none focus:border-red-500"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>

                  <div className="mt-6 grid gap-3 text-sm text-gray-300 sm:grid-cols-2">
                    <p>Email: {item.email}</p>
                    <p>WhatsApp: {item.whatsapp || "Not provided"}</p>
                    <p>Service: {item.service}</p>
                    <p>
                      Received: {new Date(item.created_at).toLocaleString()}
                    </p>
                  </div>

                  <div className="mt-6 rounded-xl bg-black/30 p-5">
                    <p className="text-xs tracking-wider text-red-400">
                      PROJECT DETAILS
                    </p>
                    <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-gray-300">
                      {item.message}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${encodeURIComponent(item.email)}`}
                      className="rounded-full border border-white/15 px-5 py-3 text-sm hover:border-red-500"
                    >
                      Email customer
                    </a>
                    {item.whatsapp && (
                      <a
                        href={`https://wa.me/${item.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/15 px-5 py-3 text-sm hover:border-red-500"
                      >
                        Open WhatsApp
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
