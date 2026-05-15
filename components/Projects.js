"use client";

import { useState } from "react";
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
  const active = featured[activeIdx];

  return (
    <section id="projects" className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em]">
          01.featured_projects
        </span>
        <div className="flex items-end justify-between mt-3 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-comic text-white">
            Selected work.
          </h2>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-mono text-gray-500 hover:text-blue-400 transition-colors duration-200"
          >
            view all
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Desktop: list + preview */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_420px] gap-12 items-start">
          {/* Left: project list */}
          <div className="divide-y divide-white/[0.05]">
            {featured.map((p, i) => (
              <button
                key={p.id}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`group w-full text-left py-6 flex items-start gap-6 transition-all duration-200 ${
                  activeIdx === i
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                {/* Number */}
                <span className="font-mono text-xs text-gray-600 mt-1 w-7 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3
                      className={`text-xl font-bold font-comic transition-colors duration-200 ${
                        activeIdx === i ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0">
                      {p.liveUrl && (
                        <Link
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-600 hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink size={14} />
                        </Link>
                      )}
                      {p.githubUrl && (
                        <Link
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-600 hover:text-white transition-colors"
                        >
                          <Github size={14} />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2 py-0.5 text-xs font-mono rounded-full border ${
                        statusStyles[p.status] ??
                        "text-gray-400 bg-white/5 border-white/10"
                      }`}
                    >
                      {p.status}
                    </span>
                    {p.technologies?.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono bg-white/5 border border-white/[0.08] rounded-full text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
                    {p.technologies?.length > 4 && (
                      <span className="text-xs font-mono text-gray-600">
                        +{p.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: sticky image preview */}
          <div className="sticky top-40">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111] aspect-[4/3]">
              {active?.image && (
                <Image
                  key={activeIdx}
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="420px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold font-comic text-lg mb-1">
                  {active?.title}
                </p>
                <p className="text-xs font-mono text-gray-400">
                  {active?.year}
                </p>
              </div>
            </div>

            {/* CTA under preview */}
            {(active?.liveUrl || active?.githubUrl) && (
              <div className="flex gap-3 mt-4">
                {active.liveUrl && (
                  <Link
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-comic font-semibold rounded-xl transition-colors duration-200"
                  >
                    <ExternalLink size={14} />
                    Live demo
                  </Link>
                )}
                {active.githubUrl && (
                  <Link
                    href={active.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 border border-white/10 hover:border-white/25 text-gray-400 hover:text-white text-sm font-mono rounded-xl transition-all duration-200"
                  >
                    <Github size={14} />
                    Source
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile: compact cards */}
        <div className="lg:hidden space-y-4">
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
                    sizes="(max-width: 1024px) 100vw"
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
                    className={`shrink-0 px-2 py-0.5 text-xs font-mono rounded-full border ${
                      statusStyles[p.status] ??
                      "text-gray-400 bg-white/5 border-white/10"
                    }`}
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
                      <ExternalLink size={12} />
                      Live
                    </Link>
                  )}
                  {p.githubUrl && (
                    <Link
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 border border-white/10 text-gray-400 text-xs font-mono rounded-lg transition-colors hover:border-white/25 hover:text-white"
                    >
                      <Github size={12} />
                      Source
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/15 hover:border-blue-500/40 hover:text-blue-400 text-white text-sm font-comic font-semibold rounded-full transition-all duration-200"
          >
            View all projects
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
