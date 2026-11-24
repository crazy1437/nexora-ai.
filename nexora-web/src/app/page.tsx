
const services = [
  {
    number: "01",
    title: "AI Workflow Automation",
    description:
      "Transform repetitive operations into intelligent workflows that give your team more time to focus on growth.",
    tag: "INTELLIGENT SYSTEMS",
  },
  {
    number: "02",
    title: "Smart Lead Management",
    description:
      "Capture enquiries, organize prospects and create a more consistent follow-up experience.",
    tag: "BUSINESS GROWTH",
  },
  {
    number: "03",
    title: "Digital Experiences",
    description:
      "Create polished, responsive websites that communicate your brand and make it easier for customers to connect.",
    tag: "DIGITAL PRODUCTS",
  },
  {
    number: "04",
    title: "API Integrations",
    description:
      "Connect your essential business platforms and help your tools work together seamlessly.",
    tag: "CONNECTED ECOSYSTEMS",
  },
];

const process = ["Discover", "Architect", "Build", "Optimize"];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#08080b] text-white">
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <a href="#" className="text-2xl font-black tracking-[.17em]">
          NEXORA<span className="text-red-500">.</span>
          <span className="ml-2 text-[9px] font-medium tracking-[.3em] text-gray-500">
            AI
          </span>
        </a>

        <div className="hidden items-center gap-9 text-sm text-gray-400 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#approach" className="hover:text-white">Approach</a>
          <a href="#about" className="hover:text-white">About</a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-red-500/50 px-5 py-3 text-xs font-semibold tracking-wide transition hover:bg-red-600"
        >
          LET'S TALK ↗
        </a>
      </nav>

      <section className="relative flex min-h-[760px] items-center">
        <div className="premium-grid absolute inset-0" />
        <div className="hero-glow pulse-animation absolute right-[-10%] top-[5%] h-[600px] w-[600px] rounded-full blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.03] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_12px_#ef3340]" />
              <span className="text-[10px] tracking-[.22em] text-gray-300">
                INTELLIGENT DIGITAL SOLUTIONS
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-.055em] sm:text-7xl lg:text-[82px]">
              Build beyond
              <br />
              the ordinary.
              <br />
              <span className="text-gradient">Automate what's next.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              We design intelligent workflows, connected systems and
              digital experiences that help ambitious businesses move forward.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-red-600 px-7 py-4 text-sm font-semibold transition hover:bg-red-500"
              >
                Explore Solutions ↗
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-4 text-sm transition hover:border-white/50"
              >
                Start a Project
              </a>
            </div>

            <p className="mt-12 text-[10px] tracking-[.25em] text-gray-600">
              AUTOMATION · INTEGRATION · DIGITAL INNOVATION
            </p>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center">
            <div className="absolute h-[90%] w-[90%] rounded-full border border-red-500/10" />
            <div className="absolute h-[72%] w-[72%] rounded-full border border-purple-400/20" />
            <div className="absolute h-[54%] w-[54%] rounded-full border border-red-400/20" />
            <div className="absolute h-[68%] w-[68%] rounded-full bg-red-600/10 blur-[75px]" />

            <div className="float-animation relative flex h-44 w-44 items-center justify-center rounded-full border border-red-400/30 bg-gradient-to-br from-red-500/25 via-[#17101c] to-purple-600/30 shadow-[0_0_100px_rgba(239,51,64,.17)]">
              <div className="absolute inset-5 rounded-full border border-white/10" />
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-red-400 via-red-600 to-purple-500 shadow-[0_0_70px_rgba(239,51,64,.65)]" />
            </div>

            <span className="absolute left-4 top-[25%] rounded-full border border-white/10 bg-[#15131a] px-4 py-2 text-[10px] tracking-widest text-gray-300">
              AI SYSTEMS
            </span>
            <span className="absolute bottom-[18%] right-0 rounded-full border border-white/10 bg-[#15131a] px-4 py-2 text-[10px] tracking-widest text-gray-300">
              AUTOMATION
            </span>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/[.07] bg-[#0d0d12] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[.35em] text-red-400">WHAT WE DO</p>
          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Technology with
              <br />
              <span className="text-gradient">a purpose.</span>
            </h2>
            <p className="max-w-md leading-7 text-gray-400">
              Practical digital solutions designed around real business
              challenges, not technology for its own sake.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.number} className="glass-card rounded-2xl p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-red-400">{service.number}</span>
                  <span className="text-[9px] tracking-[.2em] text-gray-500">
                    {service.tag}
                  </span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 max-w-lg leading-7 text-gray-400">
                  {service.description}
                </p>
                <div className="mt-8 h-px w-full bg-white/10" />
                <span className="mt-5 inline-block text-sm text-red-400">
                  Explore capabilities ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-xs tracking-[.35em] text-red-400">OUR APPROACH</p>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold sm:text-6xl">
          From complexity
          <br />
          to <span className="text-gradient">clarity.</span>
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <div key={step} className="border-t border-white/15 pt-6">
              <p className="text-sm text-red-400">0{index + 1}</p>
              <h3 className="mt-5 text-xl font-semibold">{step}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                {[
                  "Understand your goals and identify opportunities.",
                  "Plan a solution around your business needs.",
                  "Develop, integrate and test your solution.",
                  "Refine the system as your business evolves.",
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/[.07] bg-[#0d0d12] px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs tracking-[.35em] text-red-400">THE NEXORA VISION</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Intelligent automation.
              <br />
              <span className="text-gradient">Measurable growth.</span>
            </h2>
          </div>
          <p className="text-lg leading-9 text-gray-400">
            We believe technology should make business simpler. NEXORA AI
            focuses on building thoughtful digital solutions that connect
            people, processes and platforms.
          </p>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-32 text-center">
        <div className="hero-glow absolute inset-0 opacity-70" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs tracking-[.35em] text-red-400">LET'S CREATE WHAT'S NEXT</p>
          <h2 className="mt-7 text-4xl font-semibold sm:text-6xl">
            Your next big idea
            <br />
            <span className="text-gradient">starts here.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-7 text-gray-400">
            Have a workflow to improve or a digital idea to bring to life?
            Let's start a conversation.
          </p>
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="mt-10 inline-block rounded-full bg-red-600 px-8 py-4 text-sm font-semibold transition hover:bg-red-500"
          >
            Contact NEXORA AI ↗
          </a>
          <p className="mt-4 text-xs text-gray-600">
            Replace the placeholder email before publishing.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p className="font-bold tracking-[.2em] text-white">
            NEXORA<span className="text-red-500">.</span> AI
          </p>
          <p>© 2026 NEXORA AI. Built for what's next.</p>
          <p>Intelligent Automation. Measurable Growth.</p>
        </div>
      </footer>
    </main>
  );
}
