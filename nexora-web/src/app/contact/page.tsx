
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#08080b] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <Link href="/" className="text-2xl font-black tracking-[.17em]">
          NEXORA<span className="text-red-500">.</span>
          <span className="ml-2 text-[9px] font-medium tracking-[.3em] text-gray-500">
            AI
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/contact" className="text-white">Contact</Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs tracking-[.35em] text-red-400">
          START A CONVERSATION
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-7xl">
          Let's build
          <br />
          <span className="text-gradient">what's next.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Tell us about your business, your challenges and what
          you want to achieve. Let's explore the right solution.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[.03] p-8 sm:p-10">
            <h2 className="text-2xl font-semibold">Project enquiry</h2>
            <p className="mt-3 text-sm text-gray-400">
              Share a few details about your project.
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Business / Company
                </label>
                <input
                  type="text"
                  placeholder="Your business name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  WhatsApp number (optional)
                </label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Service required
                </label>
                <select
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#15151b] px-4 py-4 text-white outline-none focus:border-red-500"
                >
                  <option value="" disabled>Select a service</option>
                  <option>AI Workflow Automation</option>
                  <option>Smart Lead Management</option>
                  <option>Business Website Development</option>
                  <option>API & System Integrations</option>
                  <option>Other / Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Tell us about your project
                </label>
                <textarea
                  rows={5}
                  placeholder="What would you like to build or improve?"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none focus:border-red-500"
                />
              </div>

              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-full bg-red-600/50 px-7 py-4 text-sm font-semibold text-white/70"
              >
                Enquiry submission coming soon
              </button>

              <p className="text-xs leading-6 text-gray-500">
                This form is currently a design preview. It does not
                send or store enquiries yet.
              </p>
            </form>
          </div>

          <div className="py-4 lg:py-10">
            <p className="text-xs tracking-[.3em] text-red-400">
              WHY NEXORA AI
            </p>

            <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
              Better systems.
              <br />
              Clearer possibilities.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              We focus on practical technology that helps businesses
              simplify operations, connect their tools and create
              better digital experiences.
            </p>

            <div className="mt-12 space-y-8">
              {[
                ["01", "Understand", "We learn about your business and goals."],
                ["02", "Plan", "We identify a practical solution for your needs."],
                ["03", "Build", "We develop and test the right digital system."],
                ["04", "Improve", "We refine the solution as your needs evolve."],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-5 border-b border-white/10 pb-6">
                  <span className="text-sm text-red-400">{number}</span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-gray-500">
        © 2026 NEXORA AI. All rights reserved.
      </footer>
    </main>
  );
}
