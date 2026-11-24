
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "AI Workflow Automation",
    description:
      "Reduce repetitive work and improve operational efficiency with intelligent workflows built around your business.",
    features: [
      "Automated business processes",
      "AI-powered task assistance",
      "Workflow design and optimization",
      "Third-party tool integrations",
    ],
  },
  {
    number: "02",
    title: "Smart Lead Management",
    description:
      "Turn incoming enquiries into organized opportunities with a structured lead management system.",
    features: [
      "Website enquiry collection",
      "Centralized lead dashboard",
      "Lead status tracking",
      "Follow-up workflow automation",
    ],
  },
  {
    number: "03",
    title: "Business Website Development",
    description:
      "Build a professional digital presence designed to communicate your value and generate enquiries.",
    features: [
      "Modern responsive websites",
      "Landing pages",
      "Conversion-focused layouts",
      "Performance-conscious development",
    ],
  },
  {
    number: "04",
    title: "API & System Integrations",
    description:
      "Connect the tools your business already uses and create smoother information flows.",
    features: [
      "API integrations",
      "Application connectivity",
      "Data synchronization",
      "Custom integration workflows",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <Link href="/" className="text-xl font-bold tracking-[0.2em]">
          NEXORA<span className="text-red-500">.</span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-white/70">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <Link href="/services" className="text-white">Services</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-red-400">
          What We Do
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Technology that works
          <span className="block text-white/40">smarter for business.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
          We build intelligent digital systems that simplify operations,
          connect workflows and help businesses move forward.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-28 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.number}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.05] md:p-10"
          >
            <div className="mb-12 flex items-center justify-between">
              <span className="text-sm tracking-widest text-red-400">
                {service.number}
              </span>
              <span className="text-2xl text-white/30 transition group-hover:text-red-400">
                ↗
              </span>
            </div>

            <h2 className="text-2xl font-semibold md:text-3xl">
              {service.title}
            </h2>

            <p className="mt-5 leading-7 text-white/55">
              {service.description}
            </p>

            <ul className="mt-8 space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="border-t border-white/10 px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
          Let's Build Something
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold md:text-5xl">
          Ready to make your business work smarter?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-white/50">
          Tell us what you want to improve. Let's explore the right solution
          for your business.
        </p>

        <Link
          href="/contact"
          className="mt-9 inline-flex rounded-full bg-red-600 px-8 py-4 text-sm font-semibold transition hover:bg-red-500"
        >
          Discuss Your Project ↗
        </Link>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-xs text-white/35">
        © 2026 NEXORA AI. All rights reserved.
      </footer>
    </main>
  );
}
