"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import ScrollProgress from "@/components/ScrollProgress";
import {
  experience,
  skills,
  backendProjects,
  frontendProjects,
  plans,
  contact,
  Project,
} from "@/data/content";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

const navLinks = [
  { href: "#experience", label: "Tajriba" },
  { href: "#skills", label: "Ko'nikmalar" },
  { href: "#projects", label: "Loyihalar" },
  { href: "#plans", label: "Rejalar" },
  { href: "#contact", label: "Aloqa" },
];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <Reveal delay={index * 0.06}>
      <TiltCard className="group h-full">
        <div className="font-mono text-[11px] tracking-wide text-[var(--cyan)]">{p.kicker}</div>
        <h4 className="mt-2 text-[18px] font-semibold">{p.title}</h4>
        <p className="mt-2 min-h-[62px] text-[13.5px] leading-relaxed text-[var(--text-dim)]">{p.desc}</p>
        <div className="mb-4 mt-2 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10.5px] text-[var(--text-dim)]"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={p.link}
          target="_blank"
          rel="noopener"
          className="font-mono text-[12.5px] text-[var(--cyan)] underline decoration-transparent underline-offset-4 transition hover:decoration-[var(--cyan)]"
        >
          {p.linkLabel} →
        </a>
      </TiltCard>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <nav className="fixed left-0 right-0 top-0 z-[100] border-b border-white/10 bg-[#070b14]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1080px] items-center justify-between px-8 py-4">
          <div className="font-bold">
            azimjon<span className="text-grad">.dev</span>
          </div>
          <div className="hidden gap-8 text-sm text-[var(--text-dim)] sm:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center">
        <Hero3D />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(139,123,255,0.18),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-5 flex items-center gap-2.5 font-mono text-[13px] text-[var(--cyan)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cyan)]" />
          </span>
          BANKING &amp; FINTECH ENGINEERING
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative z-10 text-[clamp(40px,7vw,78px)] font-bold leading-[1.05] tracking-tight"
        >
          Azimjon Xatamov
          <br />
          <span className="text-grad">Fullstack Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="relative z-10 mb-10 mt-6 max-w-[560px] text-[17px] leading-relaxed text-[var(--text-dim)]"
        >
          React interfeyslardan Spring Boot backendlargacha — IntelligentSolutions&apos;da 14ta bank bilan
          ishlaydigan tizimlar ustida ishlayman.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="relative z-10 mb-11 flex flex-wrap justify-center gap-10"
        >
          {[
            ["4", "OY TAJRIBA"],
            ["14", "BANK INTEGRATSIYA"],
            ["9+", "SHAXSIY LOYIHA"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <b className="block text-[30px] font-bold text-grad">{n}</b>
              <span className="font-mono text-[12.5px] text-[var(--text-dim)]">{l}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="relative z-10 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(139,123,255,.35)" }}
            href="#projects"
            className="rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--cyan)] px-7 py-3 font-mono text-[13.5px] font-semibold text-[#07080f]"
          >
            Loyihalarni ko&apos;rish
          </motion.a>
          <motion.a
            whileHover={{ y: -3, borderColor: "var(--cyan)", color: "var(--cyan)" }}
            href="#contact"
            className="rounded-full border border-white/10 px-7 py-3 font-mono text-[13.5px]"
          >
            Bog&apos;lanish
          </motion.a>
        </motion.div>

        <div className="relative z-10 mt-14 hidden flex-col items-center gap-2 font-mono text-[11px] text-[var(--text-dim)] sm:flex">
          SCROLL
          <motion.span
            className="h-9 w-px bg-gradient-to-b from-[var(--text-dim)] to-transparent"
            animate={{ opacity: [0, 1, 0], y: [-6, 10, -6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-8">
        <section id="experience" className="py-28">
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] text-[var(--cyan)]">
            01 — ISH TAJRIBASI <span className="h-px w-8 bg-[var(--cyan)]/50" />
          </div>
          <Reveal>
            <h2 className="mb-12 text-[clamp(28px,4vw,40px)] font-bold tracking-tight">Qayerda ishlaganman</h2>
          </Reveal>

          <div className="relative pl-7">
            <div className="absolute bottom-1.5 left-[5px] top-1.5 w-0.5 bg-gradient-to-b from-[var(--violet)] to-transparent" />
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.08} className="relative pb-11 last:pb-0">
                <div className="absolute -left-7 top-1 h-3 w-3 rounded-full border-2 border-[var(--cyan)] bg-[var(--bg)]" />
                <div className="mb-1.5 font-mono text-[12.5px] text-[var(--cyan)]">{e.when.toUpperCase()}</div>
                <h3 className="text-[19px] font-semibold">
                  {e.org} <span className="font-normal text-[var(--text-dim)]">{e.role}</span>
                </h3>
                <ul className="mt-2.5 list-disc space-y-2 pl-[18px] text-[14.5px] leading-relaxed text-[var(--text-dim)]">
                  {e.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="py-28">
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] text-[var(--cyan)]">
            02 — KO&apos;NIKMALAR <span className="h-px w-8 bg-[var(--cyan)]/50" />
          </div>
          <Reveal>
            <h2 className="mb-12 text-[clamp(28px,4vw,40px)] font-bold tracking-tight">Nimalar bilan ishlayman</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="rounded-[18px] border border-white/10 bg-[var(--panel)] p-6.5">
                <h4 className="mb-4.5 font-mono text-[13px] text-[var(--pink)]">FRONTEND</h4>
                <div className="flex flex-wrap gap-2.5">
                  {skills.frontend.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[12.5px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[18px] border border-white/10 bg-[var(--panel)] p-6.5">
                <h4 className="mb-4.5 font-mono text-[13px] text-[var(--pink)]">BACKEND</h4>
                <div className="flex flex-wrap gap-2.5">
                  {skills.backend.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[12.5px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="py-28">
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] text-[var(--cyan)]">
            03 — LOYIHALAR <span className="h-px w-8 bg-[var(--cyan)]/50" />
          </div>
          <Reveal>
            <h2 className="mb-12 text-[clamp(28px,4vw,40px)] font-bold tracking-tight">Nima qurganman</h2>
          </Reveal>

          <div className="mb-4 font-mono text-[12px] text-[var(--text-dim)]">BACKEND — JAVA / SPRING BOOT</div>
          <div className="grid gap-5 sm:grid-cols-2">
            {backendProjects.map((p, i) => (
              <ProjectCard p={p} index={i} key={p.title} />
            ))}
          </div>

          <div className="mb-4 mt-10 font-mono text-[12px] text-[var(--text-dim)]">FRONTEND</div>
          <div className="grid gap-5 sm:grid-cols-2">
            {frontendProjects.map((p, i) => (
              <ProjectCard p={p} index={i} key={p.title} />
            ))}
          </div>
        </section>

        <section id="plans" className="py-28">
          <div className="mb-3.5 flex items-center gap-2.5 font-mono text-[12.5px] text-[var(--cyan)]">
            04 — KELAJAKDAGI REJALAR <span className="h-px w-8 bg-[var(--cyan)]/50" />
          </div>
          <Reveal>
            <h2 className="mb-12 text-[clamp(28px,4vw,40px)] font-bold tracking-tight">Qayerga intilaman</h2>
          </Reveal>
          <div className="grid gap-4.5 sm:grid-cols-2">
            {plans.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[var(--panel)] p-5.5">
                  <div className="flex h-9.5 w-9.5 flex-none items-center justify-center rounded-[10px] bg-gradient-to-r from-[var(--violet)] to-[var(--cyan)] font-mono text-[13px] font-bold text-[#07080f]">
                    {p.ico}
                  </div>
                  <div>
                    <h5 className="mb-1 text-[15px] font-semibold">{p.title}</h5>
                    <p className="text-[13px] leading-relaxed text-[var(--text-dim)]">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[var(--panel)] px-11 py-14 text-center">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,123,255,0.18),transparent_60%)]" />
              <h2 className="relative mb-3.5 text-[clamp(26px,4vw,38px)] font-bold">Birga ishlaylikmi?</h2>
              <p className="relative mb-8 text-[var(--text-dim)]">Savol, taklif yoki hamkorlik uchun bog&apos;laning.</p>
              <div className="relative flex flex-wrap justify-center gap-3.5">
                {[
                  { label: contact.tel, href: contact.telHref },
                  { label: contact.email, href: `mailto:${contact.email}` },
                  { label: "Telegram", href: contact.telegram },
                  { label: "GitHub", href: contact.github },
                ].map((c) => (
                  <motion.a
                    key={c.label}
                    whileHover={{ y: -2, borderColor: "var(--cyan)", color: "var(--cyan)" }}
                    href={c.href}
                    target="_blank"
                    rel="noopener"
                    className="rounded-full border border-white/10 px-5 py-2.5 font-mono text-[13px]"
                  >
                    {c.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="py-10 text-center font-mono text-[12px] text-[var(--text-dim)]">
          © 2026 Azimjon Xatamov · Toshkent, O&apos;zbekiston
        </footer>
      </div>
    </>
  );
}
