
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "AI Workflow Automation",
    description:
      "Connect your tools and automate repetitive business processes with intelligent workflows.",
  },
  {
    number: "02",
    title: "Smart Lead Management",
    description:
      "Capture enquiries, organize prospects and streamline follow-ups from one system.",
  },
  {
    number: "03",
    title: "Digital Experiences",
    description:
      "Build modern, responsive websites designed to turn visitors into customers.",
  },
  {
    number: "04",
    title: "API Integrations",
    description:
      "Connect the platforms your business relies on and make them work together.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090c] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <Link href="/" className="text-2xl font-bold tracking-widest">
          NEXORA<span className="text-red-500">.</span>
        </Link>
        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-red-500/50 px-5 py-3 text-sm hover:bg-red-500"
        >
          Let's Talk ↗
        </a>
      </nav>

      <section className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-6 py-24">
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-red-600/10 blur-[110px]" />
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.4em] text-red-400">
          Intelligent Automation · Global Solutions
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.12] tracking-tight sm:text-7xl lg:text-8xl">
          Turn business workflows into{" "}
          <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            intelligent systems.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          We help growing businesses capture leads, automate repetitive tasks
          and build smarter digital experiences.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#services"
            className="rounded-full bg-red-600 px-7 py-4 font-medium hover:bg-red-500"
          >
            Explore Solutions ↗
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-4 hover:border-white"
          >
            Start a Conversation
          </a>
        </div>
        <div className="mt-20 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="border-l border-red-500 pl-4">
            <p className="font-semibold">Automation</p>
            <p className="mt-1 text-sm text-gray-500">Smarter workflows</p>
          </div>
          <div className="border-l border-purple-500 pl-4">
            <p className="font-semibold">Integration</p>
            <p className="mt-1 text-sm text-gray-500">Connected systems</p>
          </div>
          <div className="border-l border-red-500 pl-4">
            <p className="font-semibold">Innovation</p>
            <p className="mt-1 text-sm text-gray-500">Practical solutions</p>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 bg-[#0e0e13] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            What we build
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold sm:text-6xl">
            Technology that works for your business.
          </h2>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-red-500/50 hover:bg-white/[0.04]"
              >
                <p className="text-sm text-red-400">{service.number}</p>
                <h3 className="mt-8 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 max-w-md leading-7 text-gray-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm uppercase tracking-[0.3em] text-red-400">
          Our approach
        </p>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold sm:text-6xl">
          Intelligent automation. Measurable growth.
        </h2>
        <div className="mt-12 grid gap-8 text-gray-400 sm:grid-cols-4">
          {["Discover", "Design", "Build", "Improve"].map((step, i) => (
            <div key={step}>
              <p className="text-sm text-red-400">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-medium text-white">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-28 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-red-400">
          Your next step
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold sm:text-6xl">
          Let's build a smarter business.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          Tell us about your business challenge and let's explore a practical solution.
        </p>
        <a
          href="mailto:hello@nexora.ai"
          className="mt-9 inline-block rounded-full bg-red-600 px-8 py-4 font-medium hover:bg-red-500"
        >
          Get in touch ↗
        </a>
        <p className="mt-20 text-sm text-gray-600">
          © 2026 NEXORA AI. Built for what's next.
        </p>
      </section>
    </main>
  );
}
