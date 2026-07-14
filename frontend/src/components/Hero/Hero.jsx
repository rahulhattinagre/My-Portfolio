import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/35 to-accent/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_0%,rgba(145,94,255,0.25),transparent_40%),radial-gradient(700px_circle_at_80%_20%,rgba(0,255,255,0.15),transparent_45%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <p className="text-sm font-medium text-subtleText">Hi, I&apos;m</p>

          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
            <span className="text-white/95">Rahul</span>
            <span className="ml-3 inline-flex items-center rounded-lg bg-[rgba(0,194,168,.18)] px-4 py-2 text-primary shadow-[0_0_0_1px_rgba(0,194,168,.25)]">
              Hattinagre
            </span>
          </h1>

          <p className="text-secondaryText text-lg">
            Java Full Stack Developer
          </p>

          <p className="max-w-2xl text-secondaryText">
            Computer Engineering student passionate about software development, problem-solving, and building scalable web applications. Continuously learning and creating real-world projects to grow as a Java Full Stack Developer.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 hover:text-white transition"
              aria-label="GitHub"
              title="GitHub"
            >
              <span className="text-white/85 text-base">↗</span>
            </a>
            <a
              href="#"
              className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 hover:text-white transition"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <span className="text-white/85 text-base">in</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Rahul Resume.pdf"
              download
              className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-black shadow-[0_0_35px_rgba(0,194,168,0.35)] hover:brightness-110 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

