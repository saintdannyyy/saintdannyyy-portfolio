"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Header from "@/components/Header";
import projectsData from "@/data/projects.json";

const statusStyles = {
  Completed: "text-green-400 bg-green-500/10 border-green-500/20",
  "On Going": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  "In Progress": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
};

const allCategories = ["All", ...Array.from(
  new Set(
    (projectsData.projects || []).flatMap((p) =>
      Array.isArray(p.category) ? p.category : [p.category]
    )
  )
)];

export default function ProjectsPage() {
  const projects = projectsData.projects || [];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeCategory)
            : p.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 hover:text-blue-400 transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          back to home
        </Link>

        {/* Page heading */}
        <div className="mb-12">
          <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-3 block">
            all_projects
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold font-comic text-white mb-4">
            Everything I&apos;ve built.
          </h1>
          <p className="text-gray-500 text-base max-w-xl">
            A full archive of personal projects, client work, and experiments across software engineering, mobile, and web.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-white/10 text-gray-500 hover:border-white/25 hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[#111] overflow-hidden hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0d0d0d]">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-sm">
                    no preview
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover CTAs */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {p.liveUrl && (
                    <Link
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-comic rounded-lg transition-colors"
                    >
                      <ExternalLink size={12} /> Live
                    </Link>
                  )}
                  {p.githubUrl && (
                    <Link
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 border border-white/15 hover:border-white/30 text-gray-300 text-xs font-mono rounded-lg transition-colors"
                    >
                      <Github size={12} /> Source
                    </Link>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-base font-bold font-comic text-white leading-snug">
                    {p.title}
                  </h2>
                  <span
                    className={`shrink-0 mt-0.5 px-2 py-0.5 text-xs font-mono rounded-full border ${
                      statusStyles[p.status] ?? "text-gray-400 bg-white/5 border-white/10"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.technologies?.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono bg-white/5 border border-white/[0.08] rounded-full text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                  {p.technologies?.length > 5 && (
                    <span className="text-xs font-mono text-gray-700">
                      +{p.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-600 font-mono text-sm">
            no projects in this category yet.
          </div>
        )}
      </main>
    </div>
  );
}
