import React, { useState, useEffect, useCallback } from "react";
import Reveal, { InkUnderline } from "./components/Reveal";
import SkewBg from "./components/SkewBg";
import VoltmeterGauge from "./components/VoltmeterGauge";
import ContactRow from "./components/ContactRow";
import {
  SunIcon,
  MoonIcon,
  DownloadIcon,
  ArrowIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  GitHubIcon,
} from "./components/Icons";
import cvUrl from "./Chidube_Rhema_CV_2026.pdf";
import { SKILLS, EXPERIENCE, PROJECTS } from "./data/portfolioData";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Log" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { k: "2022", v: "first frontend role" },
  { k: "04", v: "companies worked with" },
  { k: "HND", v: "Electrical & Electronics Eng., YabaTech" },
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const palette = dark
    ? {
        bg: "#0C1719",
        bgAlt: "#1A2E31",
        ink: "#DCE4E0",
        inkMuted: "rgba(220,228,224,0.6)",
        line: "rgba(125,201,201,0.16)",
        accent: "#E2554F",
        olive: "#5FA3A3",
        ochre: "#A89968",
        card: "rgba(255,255,255,0.03)",
      }
    : {
        bg: "#E4E0D3",
        bgAlt: "#C8C2B0",
        ink: "#1E2A2E",
        inkMuted: "rgba(30,42,46,0.62)",
        line: "rgba(30,42,46,0.14)",
        accent: "#C73E3E",
        olive: "#3D6B6B",
        ochre: "#8C8264",
        card: "rgba(0,0,0,0.02)",
      };

  useEffect(() => {
    const ids = ["top", "about", "skills", "experience", "projects", "contact"];
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActiveSection(e.target.id),
        ),
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    setNavOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div
      className="min-h-screen w-full transition-colors duration-500"
      style={{
        backgroundColor: palette.bg,
        color: palette.ink,
        fontFamily: "'Archivo', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Courier+Prime:wght@400;700&display=swap');
        .font-display { font-family: 'Archivo', sans-serif; letter-spacing: -0.02em; }
        .font-serif { font-family: 'Archivo', sans-serif; }
        .font-mono { font-family: 'Courier Prime', monospace; }
        ::selection { background: ${palette.ochre}; color: ${palette.bg}; }
        .paper-texture {
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 27px, ${dark ? "rgba(255,255,255,0.012)" : "rgba(0,0,0,0.015)"} 28px);
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
        }
      `}</style>

      {/* ============================ NAV ============================ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-500"
        style={{
          backgroundColor: dark
            ? "rgba(22,20,15,0.88)"
            : "rgba(237,230,214,0.88)",
          borderBottom: `1px solid ${palette.line}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("top")}
            className="font-mono text-base tracking-tight"
            style={{ color: palette.ink, fontWeight: 700 }}
          >
            &lt;<span style={{ color: palette.accent }}>Rhema</span>/&gt;
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-mono text-[11px] uppercase tracking-widest px-3 py-2 transition-colors duration-300"
                style={{
                  color:
                    activeSection === item.id
                      ? palette.accent
                      : palette.inkMuted,
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="ml-3 w-9 h-9 rounded-full border flex items-center justify-center transition-transform duration-300 hover:rotate-12"
              style={{ borderColor: palette.line, color: palette.accent }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-full border flex items-center justify-center"
              style={{ borderColor: palette.line, color: palette.accent }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setNavOpen((o) => !o)}
              aria-label="Toggle menu"
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.25"
            >
              <span
                className="block w-5 h-[1.5px]"
                style={{ backgroundColor: palette.ink }}
              />
              <span
                className="block w-5 h-[1.5px]"
                style={{ backgroundColor: palette.ink }}
              />
            </button>
          </div>
        </div>

        {navOpen && (
          <div
            className="md:hidden px-5 pb-4 flex flex-col gap-1"
            style={{ borderTop: `1px solid ${palette.line}` }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-mono text-xs uppercase tracking-widest py-3 text-left"
                style={{
                  color:
                    activeSection === item.id
                      ? palette.accent
                      : palette.inkMuted,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ============================ HERO ============================ */}
      <section
        id="top"
        className="relative overflow-hidden pt-20 pb-12 sm:pt-32 sm:pb-20 px-5 sm:px-8"
        style={{ backgroundColor: palette.bg }}
      >
        <SkewBg color={palette.bg} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal>
            <div
              className="font-mono text-[12px] sm:text-sm"
              style={{ color: palette.olive }}
            >
              &lt;Rhema/&gt;
            </div>
          </Reveal>

          <Reveal delay={70}>
            <h1
              className="font-display text-[2.8rem] sm:text-7xl leading-none mt-3"
              style={{ color: palette.ink, fontWeight: 800 }}
            >
              Chidube Rhema
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p
              className="font-mono text-[11px] sm:text-xs uppercase tracking-widest mt-4"
              style={{ color: palette.inkMuted }}
            >
              Frontend developer · Lagos, Nigeria
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p
              className="font-serif text-base sm:text-lg leading-relaxed mt-7 max-w-lg"
              style={{ color: palette.inkMuted }}
            >
              Builds{" "}
              <InkUnderline color={palette.ochre} delay={540}>
                interfaces
              </InkUnderline>{" "}
              with strong UI instincts and engineering discipline — tested,
              deliberate, and without loose wires.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <button
                onClick={() => scrollTo("projects")}
                className="font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: palette.accent, color: palette.bg }}
              >
                See the work
              </button>
              <a
                href={cvUrl}
                download="Rhema_CV"
                className="font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 border transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                style={{ borderColor: palette.ink, color: palette.ink }}
              >
                <DownloadIcon /> Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ ABOUT ============================ */}
      <section
        id="about"
        className="relative overflow-hidden px-5 sm:px-8 py-16 sm:py-28"
        style={{ backgroundColor: palette.bgAlt }}
      >
        <SkewBg color={palette.bgAlt} flip />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Reveal>
            <p
              className="font-display text-2xl sm:text-[2.6rem] sm:leading-[1.18] leading-tight"
              style={{ color: palette.ink, fontWeight: 700 }}
            >
              Trained as an electrical engineer before moving into frontend —
              <span style={{ color: palette.inkMuted, fontWeight: 400 }}>
                {" "}
                so the instinct is still to understand the load before building
                anything on top of it.
              </span>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p
              className="font-serif text-base sm:text-lg leading-relaxed mt-8 max-w-xl"
              style={{ color: palette.inkMuted }}
            >
              Frontend developer with 3+ years of experience building
              dashboards, admin panels, and landing pages for real clients,
              mostly with React, Next.js, and Tailwind CSS. I take someone
              else's design and build it exactly as intended — right down to the
              spacing and small transitions.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="font-serif text-base sm:text-lg leading-relaxed mt-8 max-w-xl"
              style={{ color: palette.inkMuted }}
            >
              I've connected interfaces to REST APIs for payments, SMS, and
              tracking, and built data visualizations with Recharts. I also use
              AI tools daily to move faster through repetitive work, so I can
              spend more time on the parts that actually need my judgment.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="flex flex-wrap gap-x-12 gap-y-6 mt-12 pt-8"
              style={{ borderTop: `1px solid ${palette.line}` }}
            >
              {stats.map((s) => (
                <div key={s.k}>
                  <div
                    className="font-mono text-2xl sm:text-3xl tabular-nums"
                    style={{ color: palette.accent }}
                  >
                    {s.k}
                  </div>
                  <div
                    className="font-mono uppercase tracking-wide text-[10px] mt-1.5"
                    style={{ color: palette.inkMuted }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ SKILLS ============================ */}
      <section
        id="skills"
        className="relative overflow-hidden px-5 sm:px-8 py-16 sm:py-28"
        style={{ backgroundColor: palette.bg }}
      >
        <SkewBg color={palette.bg} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-2">
              <h2
                className="font-display text-3xl sm:text-4xl"
                style={{ color: palette.ink, fontWeight: 600 }}
              >
                Tools, roughly ranked
              </h2>
              <span
                className="font-mono text-[10px] hidden sm:inline-block px-2 py-0.5 -rotate-2"
                style={{
                  color: palette.accent,
                  border: `1px dashed ${palette.accent}`,
                  opacity: 0.8,
                }}
              >
                self-rated
              </span>
            </div>
          </Reveal>
          <Reveal delay={40}>
            <p
              className="font-serif text-base sm:text-lg mb-10 sm:mb-12 max-w-2xl"
              style={{ color: palette.inkMuted, fontWeight: 400 }}
            >
              Each dial reads proficiency the way a voltmeter reads load —
              calibrated from practice, not estimation.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {SKILLS.map((skill, i) => (
              <VoltmeterGauge
                key={skill.name}
                skill={skill}
                palette={palette}
                delay={i * 70}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================ EXPERIENCE ============================ */}
      <section
        id="experience"
        className="relative overflow-hidden px-5 sm:px-8 py-16 sm:py-28"
        style={{ backgroundColor: palette.bgAlt }}
      >
        <SkewBg color={palette.bgAlt} flip />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Reveal>
            <h2
              className="font-display text-3xl sm:text-4xl mb-4 sm:mb-8"
              style={{ color: palette.ink, fontWeight: 600 }}
            >
              Where the hours went
            </h2>
          </Reveal>

          <div className="space-y-14 sm:space-y-20">
            <ScrollStack
              useWindowScroll
              itemDistance={40}
              itemStackDistance={24}
              itemScale={0.04}
            >
              {EXPERIENCE.map((job, i) => (
                <ScrollStackItem
                  style={{ backgroundColor: dark ? "#0C1719" : "#E4E0D3" }}
                >
                  <div className="grid sm:grid-cols-[64px_1fr] gap-3 sm:gap-8">
                    <div
                      className="font-mono text-3xl sm:text-4xl tabular-nums leading-none opacity-25 sm:opacity-30"
                      style={{ color: palette.ink }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                        <h3
                          className="font-display text-xl sm:text-2xl"
                          style={{ color: palette.ink, fontWeight: 600 }}
                        >
                          {job.org}
                        </h3>
                        <span
                          className="font-mono text-[10px] uppercase tracking-wide"
                          style={{ color: palette.inkMuted }}
                        >
                          {job.period}
                        </span>
                      </div>
                      <div
                        className="font-mono uppercase tracking-wide text-[11px] mb-4"
                        style={{ color: palette.olive }}
                      >
                        {job.role}
                      </div>
                      <ul className="space-y-2">
                        {job.points.map((p, j) => (
                          <li
                            key={j}
                            className="font-serif text-[15px] sm:text-base leading-relaxed pl-5 relative"
                            style={{ color: palette.inkMuted }}
                          >
                            <span
                              className="absolute left-0"
                              style={{ color: palette.accent }}
                            >
                              —
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>
      </section>

      {/* ============================ PROJECTS ============================ */}
      <section
        id="projects"
        className="relative overflow-hidden px-5 sm:px-8 py-16 sm:py-28"
        style={{ backgroundColor: palette.bg }}
      >
        <SkewBg color={palette.bg} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <Reveal>
            <div
              className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 mb-12 sm:mb-16 pb-6"
              style={{ borderBottom: `2px solid ${palette.ink}` }}
            >
              <h2
                className="font-display text-3xl sm:text-5xl"
                style={{ color: palette.ink, fontWeight: 800 }}
              >
                Selected builds
              </h2>
              {/* <p
                className="font-mono uppercase tracking-wide text-[10px] sm:text-[11px] max-w-55 sm:text-right leading-relaxed"
                style={{ color: palette.inkMuted }}
              >
                Four, picked because they were the hardest to get right.
              </p> */}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-14">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title} delay={i * 90}>
                <article className="group">
                  <div
                    className={`relative overflow-hidden border ${project.size === "wide" ? "aspect-21/9" : "aspect-4/5 sm:aspect-4/4.3"}`}
                    style={{ borderColor: palette.line }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{
                        filter: dark
                          ? "sepia(0.2) brightness(0.7) saturate(0.9)"
                          : "sepia(0.1) saturate(0.95)",
                      }}
                    />
                  </div>

                  <div className="flex items-baseline justify-between gap-4 mt-4 mb-2">
                    <h3
                      className="font-display text-lg sm:text-xl"
                      style={{ color: palette.ink, fontWeight: 600 }}
                    >
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      className="font-mono text-[10px] uppercase tracking-widest shrink-0 transition-colors duration-300 flex items-center gap-1.5"
                      style={{ color: palette.accent }}
                    >
                      View <ArrowIcon />
                    </a>
                  </div>
                  <p
                    className="font-serif text-sm sm:text-[15px] leading-relaxed mb-3"
                    style={{ color: palette.inkMuted }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wide"
                        style={{ color: palette.olive }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CONTACT ============================ */}
      <section
        id="contact"
        className="relative overflow-hidden px-5 sm:px-8 py-16 sm:py-28"
        style={{ backgroundColor: palette.bgAlt }}
      >
        <SkewBg color={palette.bgAlt} flip />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Reveal>
            <h2
              className="font-display text-3xl sm:text-5xl leading-[1.08] max-w-xl"
              style={{ color: palette.ink, fontWeight: 800 }}
            >
              Say what you're building —
              <span style={{ fontWeight: 400, color: palette.accent }}>
                {" "}
                I'll tell you if it fits.
              </span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-[1fr_1.1fr] gap-10 sm:gap-16 mt-12 sm:mt-16">
            <Reveal delay={80}>
              <div>
                <p
                  className="font-serif text-base mb-7"
                  style={{ color: palette.inkMuted }}
                >
                  Open to frontend roles, freelance builds, and most things
                  Web3-adjacent.
                </p>
                <div className="space-y-4">
                  <ContactRow
                    icon={<MailIcon />}
                    label="Email"
                    value="rhemathechidube@gmail.com"
                    href="mailto:rhemathechidube@gmail.com"
                    palette={palette}
                  />
                  <ContactRow
                    icon={<PhoneIcon />}
                    label="WhatsApp"
                    value="+234 708 830 9075"
                    href="https://wa.me/2347088309075"
                    palette={palette}
                  />
                  <ContactRow
                    icon={<PinIcon />}
                    label="Location"
                    value="Nigeria"
                    palette={palette}
                  />
                  <ContactRow
                    icon={<GitHubIcon />}
                    label="GitHub"
                    value="github.com/Dev-Rhema"
                    href="https://github.com/Dev-Rhema/"
                    palette={palette}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer
        className="px-5 sm:px-8 py-10 border-t"
        style={{ borderColor: palette.line }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: palette.inkMuted }}
          >
            © {new Date().getFullYear()} Chidube Rhema
          </span>
          <span
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: palette.olive }}
          >
            React.js · Tailwind CSS
          </span>
        </div>
      </footer>
    </div>
  );
}
