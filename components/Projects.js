"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Github,
  Star,
  ArrowRight,
} from "lucide-react";
import projectsData from "../data/projects.json";

/**
 * Hook: vertical sticky section that maps native page scroll to an active index.
 * - sectionRef goes on the tall wrapper (height ≈ projects.length * 100vh)
 * - Returns activeIndex and normalized progress [0..1]
 */
function useNaturalScrollProjects(total, opts = { threshold: 0.3 }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || total <= 0) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // Only react while the section is on screen by a threshold
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.min(rect.height, vh - rect.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / vh;
        if (visibilityRatio < (opts.threshold ?? 0.3)) return;

        const scrollThrough = Math.max(0, -rect.top);
        const totalScrollable = Math.max(1, rect.height - vh);
        const p = Math.min(1, scrollThrough / totalScrollable);
        setProgress(p);
        const raw = Math.floor(p * total);
        const nextIdx = Math.max(0, Math.min(total - 1, raw));
        setActiveIndex((prev) => (prev === nextIdx ? prev : nextIdx));
      });
    };

    const onResize = () => onScroll();
    const onKey = (e) => {
      if (["ArrowDown", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        const target = Math.min(total - 1, activeIndex + 1);
        snapTo(target);
      }
      if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
        const target = Math.max(0, activeIndex - 1);
        snapTo(target);
      }
    };

    const snapTo = (i) => {
      const maxScroll = el.scrollHeight - window.innerHeight;
      const y = total > 1 ? (i / (total - 1)) * maxScroll : 0;
      el.scrollTo({ top: y, behavior: "smooth" });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("keydown", onKey);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [total, opts.threshold, activeIndex]);

  return { sectionRef, activeIndex, progress };
}

// Pretty gradients per index – preserves your current vibe
const GRADIENTS = [
  "linear-gradient(188.62deg, #6B0D33 49.9%, #EA3546 81.7%, #F86624 93.88%, #F9D793 113.5%)",
  "linear-gradient(188.62deg, #070E57 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)",
  "linear-gradient(188.62deg, #134E4A 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)",
  "linear-gradient(188.62deg, #3D1A7A 49.9%, #662E9B 81.7%, #EA3546 93.88%, #F9D793 113.5%)",
  "linear-gradient(188.62deg, #083926 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)",
];
const getProjectGradient = (i) => GRADIENTS[i % GRADIENTS.length];

function StatusBadge({ status }) {
  const icon =
    status === "Completed" ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : status === "In Progress" || status === "On Going" ? (
      <Clock className="w-4 h-4 text-yellow-500" />
    ) : (
      <Calendar className="w-4 h-4 text-gray-400" />
    );
  const color =
    status === "Completed"
      ? "bg-green-500/20 text-green-400 border-green-500/30"
      : status === "In Progress" || status === "On Going"
      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      : "bg-gray-500/20 text-gray-400 border-gray-500/30";
  return (
    <Badge
      className={`${color} border backdrop-blur-sm flex items-center gap-1`}
    >
      {icon}
      <span>{status}</span>
    </Badge>
  );
}

function BulletIcon() {
  return (
    <svg
      className="mt-1 mr-2 h-5 w-5 shrink-0 text-pink-500 dark:text-pink-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 1s0 7-2 9-9 2-9 2 7 0 9 2 2 9 2 9 0-7 2-9 9-2 9-2-7 0-9-2-2-9-2-9z" />
    </svg>
  );
}

function ProjectVisuals({ projects, idx }) {
  const p = projects[idx];
  return (
    <div className="w-full lg:w-[60%] relative flex items-center justify-center p-6 sm:p-8">
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1.5 shadow-2xl w-full max-w-4xl h-[78vh] lg:rounded-3xl lg:p-2 border-white/15 hover:border-white/25 transition-all duration-500">
        {/* shimmering top line */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
          }}
        />

        {/* glass body */}
        <div className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl from-black/40 to-transparent transition-all duration-700 bg-gradient-to-b">
          {/* gradient wash */}
          <div
            className="absolute inset-0 -z-10 opacity-80 transition-all duration-700"
            style={{ background: getProjectGradient(idx) }}
          />

          {/* header row (desktop) */}
          <div className="hidden w-full flex-row items-center justify-between px-8 sm:px-12 py-6 lg:flex text-white">
            <h3 className="max-w-[90%] text-2xl sm:text-3xl font-bold tracking-wide transition-all duration-700">
              {p?.description || p?.title}
            </h3>
            <ArrowRight className="size-6" />
          </div>

          {/* image */}
          <div className="relative w-full max-w-[88%] translate-y-5 -rotate-3 lg:rotate-0 lg:group-hover:scale-[1.06] lg:group-hover:-rotate-3 transition-all duration-700 will-change-transform">
            <div
              className="relative w-full overflow-hidden rounded-lg border border-white/20"
              style={{ aspectRatio: "1203/753" }}
            >
              {p?.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  priority={idx === 0}
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* right edge progress bars (mobile-hidden) */}
      <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <div className="flex flex-col space-y-2">
          {projects.map((_, i) => (
            <div
              key={i}
              className="w-2 h-8 rounded-full transition-all duration-500 relative overflow-hidden"
              style={{
                backgroundColor: i === idx ? "white" : "rgba(255,255,255,0.3)",
                boxShadow: i === idx ? "0 0 8px rgba(255,255,255,0.5)" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectDetails({ p, isActive, idx }) {
  const [display, setDisplay] = useState(p);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    if (!display || !p || display.id === p.id) return;
    setAnim(true);
    const t = setTimeout(() => {
      setDisplay(p);
      setAnim(false);
    }, 150);
    return () => clearTimeout(t);
  }, [p, display?.id]);

  return (
    <div className="w-full lg:w-[40%] p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-md">
      <div
        className={`max-w-md mx-auto transition-all duration-300 ease-out ${
          anim
            ? "opacity-0 translate-y-4 scale-95"
            : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {/* badges */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-500 delay-100 ${
            anim ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
          }`}
        >
          {display?.featured && (
            <Badge className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] text-white border-0">
              <Star className="w-3 h-3 mr-1" /> Featured
            </Badge>
          )}
          {display?.status && <StatusBadge status={display.status} />}
        </div>

        {/* title + desc */}
        <div
          className={`space-y-2 mb-4 transition-all duration-500 delay-200 ${
            anim ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {display?.title}
          </h2>
          {display?.description && (
            <p className="text-white/80 text-sm leading-relaxed">
              {display.description}
            </p>
          )}
        </div>

        {/* meta */}
        <div
          className={`flex items-center gap-3 text-white/60 mb-6 transition-all duration-500 delay-300 ${
            anim ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          {display?.category && (
            <Badge
              variant="outline"
              className="text-white/70 border-white/30 bg-white/10 backdrop-blur-sm"
            >
              {display.category}
            </Badge>
          )}
          {display?.year && (
            <>
              <span>•</span>
              <span>{display.year}</span>
            </>
          )}
        </div>

        {/* highlights */}
        {!!display?.highlights?.length && (
          <div
            className={`space-y-3 mb-6 transition-all duration-500 delay-400 ${
              anim ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <h4 className="text-white font-semibold text-lg">Key Highlights</h4>
            <ul className="space-y-2 text-sm">
              {display.highlights.slice(0, 4).map((hl, i) => (
                <li key={i} className="text-white/80 flex items-start gap-2">
                  <BulletIcon />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* tech */}
        {!!display?.technologies?.length && (
          <div
            className={`space-y-3 mb-6 transition-all duration-500 delay-500 ${
              anim ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <h4 className="text-white font-semibold text-lg">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {display.technologies.map((t, i) => (
                <Badge
                  key={i}
                  className="bg-white/10 backdrop-blur-sm text-white/90 border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* actions */}
        <div
          className={`flex gap-4 pt-2 transition-all duration-500 delay-700 ${
            anim
              ? "opacity-0 translate-y-4 scale-95"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {display?.liveUrl && (
            <Button
              asChild
              className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border-0 flex-1"
            >
              <Link
                href={display.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </Link>
            </Button>
          )}
          {display?.githubUrl && (
            <Button
              asChild
              variant="outline"
              className="border-white/30 hover:border-white/50 hover:bg-white/10 text-white backdrop-blur-sm flex-1"
            >
              <Link
                href={display.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" /> Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filtered, setFiltered] = useState([]);

  // load from JSON (preserves your current data source)
  useEffect(() => {
    const list = projectsData.projects || [];
    setProjects(list);
    setFiltered(list);
  }, []);

  // filters (kept from your original page)
  useEffect(() => {
    if (filter === "All") setFiltered(projects);
    else if (filter === "Featured")
      setFiltered(projects.filter((p) => p.featured));
    else setFiltered(projects.filter((p) => p.category === filter));
  }, [filter, projects]);

  const categories = useMemo(
    () => [
      "All",
      "Featured",
      ...Array.from(new Set(projects.map((p) => p.category))),
    ],
    [projects]
  );

  const total = filtered.length;
  const { sectionRef, activeIndex, progress } = useNaturalScrollProjects(
    total,
    { threshold: 0.5 }
  );
  const sectionHeight = `${Math.max(total * 100, 300)}vh`;

  if (total === 0) {
    return (
      <div className="w-full py-20 text-center">
        <p className="text-white/60 text-lg">Loading projects...</p>
      </div>
    );
  }

  const activeProject = filtered[activeIndex];

  return (
    <div
      className="w-full bg-transparent"
      id="projects"
      ref={sectionRef}
      style={{ height: sectionHeight }}
    >
      {/* Header */}
      <div className="text-center mb-8 pt-16">
        <p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
          FEATURED CASE STUDIES
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-comic">
          <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent drop-shadow-lg">
            Curated work
          </span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6 font-comic drop-shadow px-4">
          A showcase of my recent work, featuring full-stack applications,
          mobile apps, and innovative solutions.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={`${
                filter === cat
                  ? "bg-gradient-to-r from-[#EA3546] to-[#662E9B] text-white"
                  : "border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 text-gray-300"
              } transition-all duration-300`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen">
        <div className="h-screen bg-black/10 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow- mx-4">
          {/* background glows */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-red-900/20" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,theme(colors.purple.600/0.15),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.red.600/0.15),transparent_50%)]" />

          <div className="relative flex h-full flex-col lg:flex-row">
            {/* Left visuals */}
            <ProjectVisuals projects={filtered} idx={activeIndex} />

            {/* Right details */}
            <ProjectDetails p={activeProject} isActive idx={activeIndex} />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16 px-4">
        <p className="text-white/60 mb-6 text-lg">
          Want to see more projects or discuss a collaboration?
        </p>
        <Button
          asChild
          className="px-8 py-3 bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border-0"
        >
          <Link href="/projects">
            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
