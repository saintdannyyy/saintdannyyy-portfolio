"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Codlogics Software Engineering",
    position: "Software Engineer",
    location: "Accra, GH",
    startDate: "Sept 2023",
    endDate: "Present",
    duration: "3+ yrs",
    description:
      "Engineering, and shipping full-stack, IoT applications across multiple client and internal projects",
    highlights: [
      "Emissor, email marketing & automation platform",
      "J100 Coders coding sandbox, edtech platform teaching kids to code.",
      "SIDLog, biometric-enabled human security and identity management system.",
      "TMMLOG, digital tourism management system.",
      "IoT-integrated access control & attendance systems deployed across 3+ government-contracted clients.",
      "Collaborated in Agile sprints — planning, code reviews, debugging, and client communication throughout each delivery cycle.",
    ],
    technologies: [
      "React",
      "Next",
      "Node",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "Python",
      "CPP",
      "IoT",
    ],
    color: "blue",
  },
  {
    id: 2,
    company: "Zest Ghana",
    position: "Frontend Engineer",
    location: "Remote",
    startDate: "Apr 2024",
    endDate: "Sept 2025",
    duration: "1.5 yrs",
    description:
      "Owned the client side front end of a Point of Sale web app for small businesses across Africa — from architecture to shipping.",
    highlights: [
      "Architected the reusable component library and built responsive interfaces.",
      "Integrated REST APIs with the backend team.",
      "Collaborated with designer and product manager to ship product.",
    ],
    technologies: ["Next.js", "TailwindCSS", "Shadcn", "JavaScript", "Figma"],
    color: "violet",
  },
  {
    id: 3,
    company: "Trestle Academy Ghana",
    position: "Software Engineer Intern",
    location: "Remote",
    startDate: "May 2023",
    endDate: "Aug 2023",
    duration: "3 mos",
    description:
      "Gained hands-on experience in web and mobile development under mentorship, contributing to live client-facing projects.",
    highlights: [
      "Developed and iterated UI components in React and Flutter, receiving sign-off from senior engineers.",
      "Contributed to responsive layouts and mobile-first design patterns, gaining hands-on experience in cross-platform consistency.",
    ],
    technologies: ["HTML", "JavaScript", "React"],
    color: "emerald",
  },
];

const colorMap = {
  blue: {
    dot: "bg-blue-500",
    glow: "shadow-blue-500/40",
    badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    accent: "text-blue-400",
    line: "from-blue-500/60",
    bullet: "bg-blue-500/70",
  },
  violet: {
    dot: "bg-violet-500",
    glow: "shadow-violet-500/40",
    badge: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    accent: "text-violet-400",
    line: "from-violet-500/60",
    bullet: "bg-violet-500/70",
  },
  emerald: {
    dot: "bg-emerald-500",
    glow: "shadow-emerald-500/40",
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    accent: "text-emerald-400",
    line: "from-emerald-500/60",
    bullet: "bg-emerald-500/70",
  },
  amber: {
    dot: "bg-amber-500",
    glow: "shadow-amber-500/40",
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    accent: "text-amber-400",
    line: "from-amber-500/60",
    bullet: "bg-amber-500/70",
  },
};

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const c = colorMap[exp.color];
  const isRight = index % 2 === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
      className={`relative flex ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col items-start gap-0 group`}
    >
      {/* Spacer */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* Center dot */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 flex-col items-center z-10">
        <div
          className={`w-4 h-4 rounded-full ${c.dot} shadow-lg ${c.glow} group-hover:scale-150 transition-transform duration-300`}
        />
      </div>

      {/* Mobile dot + date */}
      <div className="lg:hidden flex items-center gap-3 mb-3">
        <div className={`w-3 h-3 rounded-full ${c.dot} shadow-md ${c.glow}`} />
        <span className="font-mono text-xs text-gray-600">
          {exp.startDate} – {exp.endDate}
        </span>
      </div>

      {/* Card */}
      <div className={`lg:w-1/2 ${isRight ? "lg:pr-14" : "lg:pl-14"} w-full`}>
        <div className="relative rounded-2xl border border-white/[0.06] bg-[#111] p-6 hover:border-white/[0.14] transition-all duration-300 overflow-hidden group/card">
          {/* Top glow strip */}
          <div
            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${c.line} to-transparent`}
          />

          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-1">
            <div>
              <p className="font-mono text-xs text-gray-600 mb-1 hidden lg:block">
                {exp.startDate} – {exp.endDate} · {exp.duration}
              </p>
              <h3 className="text-xl font-bold font-comic text-white leading-snug">
                {exp.position}
              </h3>
              <p
                className={`text-sm font-semibold font-mono ${c.accent} mt-0.5`}
              >
                {exp.company}
              </p>
            </div>
            <span
              className={`shrink-0 mt-1 px-2.5 py-1 text-xs font-mono rounded-full border ${c.badge}`}
            >
              {exp.duration}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-gray-600 text-xs font-mono mt-2 mb-4">
            <MapPin size={11} />
            {exp.location}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Highlights / bullets */}
          {exp.highlights?.length > 0 && (
            <ul className="space-y-2 mb-5">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-gray-500"
                >
                  <span
                    className={`mt-[6px] w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`}
                  />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs font-mono bg-white/5 border border-white/[0.08] rounded-full text-gray-500 hover:text-gray-300 hover:border-white/20 transition-colors duration-200"
              >
                {t}
              </span>
            ))}
          </div>

          <ArrowUpRight
            size={16}
            className="absolute bottom-4 right-4 text-white/10 group-hover/card:text-white/30 transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const lineRef = useRef(null);
  const [lineH, setLineH] = useState(0);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineH(100);
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="w-full py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-2 block">
          02.experience.md
        </span>
        <div className="flex items-end justify-between mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold font-comic text-white">
            Where I&apos;ve worked.
          </h2>
          <span className="hidden sm:block font-mono text-xs text-gray-700">
            {experiences.length} roles
          </span>
        </div>

        <div ref={lineRef} className="relative">
          {/* Animated center line */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-px top-0 w-px bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent origin-top transition-all duration-1000 ease-out"
            style={{ height: `${lineH}%` }}
          />
          {/* Mobile left line */}
          <div className="lg:hidden absolute left-1.5 top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
