"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import projectsData from "../data/projects.json";

const statusStyles = {
  Completed: "text-green-400 bg-green-500/10 border-green-500/20",
  "On Going": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  "In Progress": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
};

export default function Projects() {
  const featured = (projectsData.projects || []).filter((p) => p.featured);
  const [activeIdx, setActiveIdx] = useState(0);
  // displayIdx lags behind activeIdx so text can fade out before updating
  const [displayIdx, setDisplayIdx] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const sectionRef = useRef(null);
  const display = featured[displayIdx];

  useEffect(() => {
    if (activeIdx === displayIdx) return;
    setTextVisible(false);
    const t = setTimeout(() => {
      setDisplayIdx(activeIdx);
      setTextVisible(true);
    }, 220);
    return () => clearTimeout(t);
  }, [activeIdx, displayIdx]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const { top, height } = section.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = -top;
      const progress = Math.max(0, Math.min(0.999, scrolled / scrollable));
      setActiveIdx(Math.floor(progress * featured.length));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [featured.length]);

  return (
    <>
      {/* ── DESKTOP: sticky scroll, one project at a time ── */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative bg-[#0a0a0a]"
        style={{ height: `${featured.length * 100}vh` }}
        id="projects"
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            {/* Header */}
            <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-2 block">
              01.featured_projects
            </span>
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-4xl font-bold font-comic text-white">
                Things I&apos;ve shipped.
              </h2>
              <div className="flex items-center gap-6">
                <span className="font-mono text-sm text-gray-600">
                  {String(activeIdx + 1).padStart(2, "0")} /{" "}
                  {String(featured.length).padStart(2, "0")}
                </span>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-sm font-mono text-gray-500 hover:text-blue-400 transition-colors"
                >
                  view all <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Project display: image LEFT | details RIGHT */}
            <div className="grid grid-cols-[440px_1fr] gap-16 items-center">
              {/* Image — all stacked, crossfade via opacity */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111] aspect-[4/3]">
                {featured.map((p, i) =>
                  p.image ? (
                    <Image
                      key={p.id}
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover absolute inset-0 transition-opacity duration-700 ease-in-out"
                      style={{ opacity: i === activeIdx ? 1 : 0 }}
                      sizes="440px"
                    />
                  ) : null,
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Progress pills */}
                <div className="absolute bottom-4 right-4 flex gap-1.5">
                  {featured.map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-full transition-all duration-500 ${
                        i === activeIdx
                          ? "w-5 h-1.5 bg-blue-400"
                          : "w-1.5 h-1.5 bg-white/25"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Details — crossfade: fade out → swap content → fade in */}
              <div
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.22s ease, transform 0.22s ease",
                }}
              >
                <span className="font-mono text-xs text-gray-600 mb-4 block">
                  {String(displayIdx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-4xl xl:text-5xl font-bold font-comic text-white mb-4 leading-tight">
                  {display?.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-7 max-w-lg">
                  {display?.description}
                </p>

                {/* Status + tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span
                    className={`px-2.5 py-1 text-xs font-mono rounded-full border ${
                      statusStyles[display?.status] ??
                      "text-gray-400 bg-white/5 border-white/10"
                    }`}
                  >
                    {display?.status}
                  </span>
                  {display?.technologies?.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/[0.08] rounded-full text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
                  {display?.liveUrl && (
                    <Link
                      href={display.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-comic font-semibold rounded-xl transition-colors duration-200"
                    >
                      <ExternalLink size={14} /> Live demo
                    </Link>
                  )}
                  {display?.githubUrl && (
                    <Link
                      href={display.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-white/25 text-gray-400 hover:text-white text-sm font-mono rounded-xl transition-all duration-200"
                    >
                      <Github size={14} /> Source
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE: stacked cards ── */}
      <section
        className="lg:hidden w-full py-24 bg-[#0a0a0a]"
        id="projects-mobile"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em]">
            01.featured_projects
          </span>
          <div className="flex items-end justify-between mt-3 mb-10">
            <h2 className="text-4xl font-bold font-comic text-white">
              Things I've shipped.
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-mono text-gray-500 hover:text-blue-400"
            >
              view all <ArrowRight size={13} />
            </Link>
          </div>

          <div className="space-y-4">
            {featured.map((p, i) => (
              <div
                key={p.id}
                className="rounded-2xl border border-white/[0.06] bg-[#111] overflow-hidden"
              >
                {p.image && (
                  <div className="relative w-full h-44">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-xs text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold font-comic text-white">
                      {p.title}
                    </h3>
                    <span
                      className={`shrink-0 px-2 py-0.5 text-xs font-mono rounded-full border ${statusStyles[p.status] ?? "text-gray-400 bg-white/5 border-white/10"}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.technologies?.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono bg-white/5 border border-white/[0.08] rounded-full text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {p.liveUrl && (
                      <Link
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-comic font-semibold rounded-lg transition-colors"
                      >
                        <ExternalLink size={12} /> Live
                      </Link>
                    )}
                    {p.githubUrl && (
                      <Link
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 border border-white/10 text-gray-400 text-xs font-mono rounded-lg transition-colors hover:border-white/25 hover:text-white"
                      >
                        <Github size={12} /> Source
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 border border-white/15 hover:border-blue-500/40 hover:text-blue-400 text-white text-sm font-comic font-semibold rounded-full transition-all duration-200"
            >
              View all projects <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
