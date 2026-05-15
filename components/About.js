"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Code2, Camera, Headphones, PenLine } from "lucide-react";

const personas = [
  {
    id: "software-engineer",
    label: "Software Engineer",
    short: "SWE",
    icon: Code2,
    image: "/saintdannyyy.jpg",
    skills: ["Full Stack Development", "Web & Mobile", "AI Integration"],
    description:
      "Crafting scalable web and mobile applications — turning complex problems into elegant, production-ready code.",
  },
  {
    id: "videographer",
    label: "Videographer",
    short: "Video",
    icon: Camera,
    image: "/video.jpg",
    skills: ["Cinematic Production", "Events Coverage", "Video Editing"],
    description:
      "Capturing life's moments and transforming them into compelling visual narratives that resonate.",
  },
  {
    id: "sound-engineer",
    label: "Sound Engineer",
    short: "Sound",
    icon: Headphones,
    image: "/sound.PNG",
    skills: ["Mixing & Mastering", "Sound Design", "Live Recording"],
    description:
      "Engineering crystal-clear audio experiences — making every note land exactly right during live events.",
  },
  {
    id: "content-creator",
    label: "Content Creator",
    short: "Content",
    icon: PenLine,
    image: "/content.jpg",
    skills: ["Content Strategy", "Social Media", "Creative Direction"],
    description:
      "Creating engaging content that spreads knowledge of the ever-evolving world of tech and creativity.",
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const current = personas[active];
  const ActiveIcon = current.icon;

  // Drive active role from scroll position within the section
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const { top, height } = section.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = -top;
      const progress = Math.max(0, Math.min(0.999, scrolled / scrollable));
      const idx = Math.floor(progress * personas.length);
      setActive(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clicking a role smooth-scrolls to the matching position in the section
  const handleRoleClick = (i) => {
    const section = sectionRef.current;
    if (!section) return;
    const sectionTop = section.offsetTop;
    const scrollable = section.offsetHeight - window.innerHeight;
    const target = sectionTop + (i / personas.length) * scrollable + 1;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a]"
      style={{ height: `${personas.length * 100}vh` }}
      id="about"
    >
      {/* Sticky viewport — stays on screen while user scrolls through 4×100vh */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* ── DESKTOP: 3-col — content | image | role-list ── */}
          <div className="hidden lg:grid grid-cols-[1fr_340px_156px] gap-10 items-center">
            {/* LEFT: Text content — fades in on persona change */}
            <div key={current.id} className="animate-fade-in-up">
              <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-4 block">
                02.about_me
              </span>
              <p className="text-gray-500 text-lg font-comic mb-1">
                I am a ...
              </p>
              <h2 className="text-5xl xl:text-6xl font-bold font-comic text-blue-400 mb-5 leading-tight">
                {current.label}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed font-comic mb-7 max-w-md">
                {current.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {current.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-comic border border-white/10 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CENTER: Styled image frame */}
            <div className="relative">
              {/* Corner accent lines */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-blue-500/40 rounded-tr-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-blue-500/40 rounded-bl-2xl pointer-events-none" />
              {/* Floating role icon bubble */}
              <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center pointer-events-none z-10">
                <ActiveIcon size={14} className="text-blue-400/70" />
              </div>

              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/[0.08] bg-[#111]">
                <Image
                  key={current.id}
                  src={current.image}
                  alt={current.label}
                  fill
                  className="object-cover"
                />
                {/* Role badge overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1.5 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full text-xs font-mono text-blue-400">
                    {current.label}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: Vertical role selector */}
            <div className="flex flex-col gap-1">
              {personas.map((p, i) => {
                const Icon = p.icon;
                const isActive = i === active;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleRoleClick(i)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-left font-comic text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-600/15 border border-blue-500/30 text-blue-400"
                        : "border border-transparent text-gray-600 hover:text-gray-300 hover:border-white/10"
                    }`}
                  >
                    <Icon
                      size={14}
                      className={`shrink-0 transition-colors ${
                        isActive
                          ? "text-blue-400"
                          : "text-gray-700 group-hover:text-gray-400"
                      }`}
                    />
                    <span className="flex-1">{p.short}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    )}
                  </button>
                );
              })}

              {/* Progress bar */}
              <div className="mt-5 px-4 flex gap-1.5">
                {personas.map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                      i === active ? "bg-blue-400" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── MOBILE: stacked layout with tap-to-switch tabs ── */}
          <div className="lg:hidden space-y-6">
            <div>
              <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-4 block">
                02.about_me
              </span>
              <div className="flex flex-wrap gap-2 mb-4">
                {personas.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActive(i)}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs font-comic font-medium transition-all duration-200 ${
                        active === i
                          ? "bg-blue-600/20 border border-blue-500/40 text-blue-400"
                          : "border border-white/10 text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      <Icon size={12} />
                      {p.short}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative w-full max-w-xs mx-auto aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#111]">
              <Image
                key={current.id}
                src={current.image}
                alt={current.label}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <span className="inline-block px-3 py-1 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full text-xs font-mono text-blue-400">
                  {current.label}
                </span>
              </div>
            </div>

            <div key={current.id + "-m"} className="animate-fade-in-up">
              <p className="text-gray-500 text-sm font-comic mb-1">
                I am a ...
              </p>
              <h2 className="text-3xl font-bold font-comic text-blue-400 mb-3">
                {current.label}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed font-comic mb-4">
                {current.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {current.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full text-xs font-comic border border-white/10 text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
