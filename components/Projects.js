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
 * Hook: Scroll hijacking for projects section
 * - Prevents page scroll when in projects section
 * - Only allows scrolling through projects
 * - Releases scroll control after completing all projects
 */
function useScrollHijackProjects(total, opts = { threshold: 0.3 }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHijacked, setIsHijacked] = useState(false);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || total <= 0) return;

    // Only enable scroll hijacking on desktop (lg screens and above)
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    let frame = 0;
    let wheelDelta = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;

        // Check if projects section is in view
        const inView = rect.top <= vh * 0.2 && rect.bottom >= vh * 0.8;

        if (inView && !isHijacked) {
          // Start hijacking
          setIsHijacked(true);
          scrollPosition.current = window.scrollY;
          document.body.style.overflow = "hidden";
        } else if (!inView && isHijacked) {
          // Release hijacking
          setIsHijacked(false);
          document.body.style.overflow = "";
        }
      });
    };

    const onWheel = (e) => {
      if (!isHijacked) return;

      e.preventDefault();
      wheelDelta += e.deltaY;

      // Sensitivity control
      const sensitivity = 100;
      if (Math.abs(wheelDelta) < sensitivity) return;

      const direction = wheelDelta > 0 ? 1 : -1;
      wheelDelta = 0;
      const vh = window.innerHeight;

      let newIndex = activeIndex;

      if (direction > 0) {
        // Scrolling down
        if (activeIndex < total - 1) {
          newIndex = activeIndex + 1;
        } else {
          // Reached end, release hijacking and continue page scroll
          setIsHijacked(false);
          document.body.style.overflow = "";
          window.scrollTo({
            top: scrollPosition.current + vh,
            behavior: "smooth",
          });
          return;
        }
      } else {
        // Scrolling up
        if (activeIndex > 0) {
          newIndex = activeIndex - 1;
        } else {
          // Reached beginning, release hijacking and scroll up
          setIsHijacked(false);
          document.body.style.overflow = "";
          window.scrollTo({
            top: scrollPosition.current - vh,
            behavior: "smooth",
          });
          return;
        }
      }

      setActiveIndex(newIndex);
      setProgress(newIndex / Math.max(1, total - 1));
    };

    const onKey = (e) => {
      if (!isHijacked) return;

      if (["ArrowDown", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        if (activeIndex < total - 1) {
          setActiveIndex(activeIndex + 1);
          setProgress((activeIndex + 1) / Math.max(1, total - 1));
        }
      }
      if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
        if (activeIndex > 0) {
          setActiveIndex(activeIndex - 1);
          setProgress((activeIndex - 1) / Math.max(1, total - 1));
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);

    // Handle window resize to disable hijacking on mobile
    const onResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop && isHijacked) {
        setIsHijacked(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("resize", onResize);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
      if (frame) cancelAnimationFrame(frame);
    };
  }, [total, activeIndex, isHijacked]);

  const snapTo = (index) => {
    setActiveIndex(index);
    setProgress(index / Math.max(1, total - 1));
  };

  return { sectionRef, activeIndex, progress, isHijacked, snapTo };
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
    <div className="lg:w-[70%] h-full">
      <div className="w-full h-full flex items-center justify-center p-8">
        <Link
          href={p?.liveUrl || p?.githubUrl || "#"}
          target={p?.liveUrl ? "_blank" : "_self"}
          rel={p?.liveUrl ? "noopener noreferrer" : ""}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1.5 shadow-2xl w-full max-w-4xl h-[560px] lg:rounded-3xl lg:p-2 border-white/15 hover:border-white/25 transition-all duration-500"
        >
          {/* Top gradient border */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
            }}
          />

          {/* Main content container */}
          <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl from-black/40 to-transparent transition-all duration-300 bg-gradient-to-b">
            {/* Custom gradient background */}
            <div
              className="absolute inset-0 -z-1 opacity-80"
              style={{
                background: getProjectGradient(idx),
              }}
            />

            {/* Top gradient line */}
            <div
              className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)",
              }}
            />

            {/* Title and arrow (visible on large screens) */}
            <div className="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-white">
              <h3 className="max-w-[90%] text-3xl font-bold tracking-wide">
                {p?.description || p?.title}
              </h3>
              <ArrowRight className="size-6" />
            </div>

            {/* Project Image */}
            <div className="relative w-full max-w-[85%] translate-y-5 -rotate-3 lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 transition-all duration-300 will-change-transform">
              {p?.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1203}
                  height={753}
                  className="w-full rounded-t-lg border-[1.5px] border-white/20 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                  style={{
                    boxShadow: `0 0 30px rgba(59,130,246,0.5)`,
                  }}
                />
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function ProjectDetails({ p, isActive, idx }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "In Progress":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <Calendar className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "On Going":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="lg:w-[30%] h-full bg-black/20 backdrop-blur-sm border-l border-white/10 p-8 lg:p-12 flex flex-col justify-center">
      <div className="space-y-3 max-w-lg">
        {/* Project Badge and Status */}
        <div className="flex items-center gap-3">
          {p?.featured && (
            <Badge className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] text-white border-0">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
          <Badge
            className={`${getStatusColor(p?.status)} border backdrop-blur-sm`}
          >
            {getStatusIcon(p?.status)}
            <span className="ml-1">{p?.status}</span>
          </Badge>
        </div>

        {/* Project Title */}
        <div className="space-y-2">
          <h2 className="text-lg lg:text-3xl font-bold text-white leading-tight">
            {p?.title}
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            {p?.description}
          </p>
        </div>

        {/* Category and Year */}
        <div className="flex items-center gap-3 text-white/60">
          <Badge
            variant="outline"
            className="text-white/70 border-white/30 bg-white/10 backdrop-blur-sm"
          >
            {p?.category}
          </Badge>
          <span>•</span>
          <span>{p?.year}</span>
        </div>

        {/* Key Highlights */}
        {p?.highlights && (
          <div className="space-y-1">
            <h4 className="text-white font-semibold text-lg">Key Highlights</h4>
            <ul className="space-y-1">
              {p.highlights.slice(0, 4).map((highlight, hlIndex) => (
                <li
                  key={hlIndex}
                  className="text-white/80 flex items-start gap-3"
                >
                  <span className="text-[#EA3546] mt-1">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="space-y-1">
          <h4 className="text-white font-semibold text-lg">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {p?.technologies?.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                className="bg-white/10 backdrop-blur-sm text-white/90 border-white/20 hover:bg-white/20 transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-2">
          {p?.liveUrl && (
            <Button
              asChild
              className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border-0 flex-1"
            >
              <Link href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
            </Button>
          )}

          {p?.githubUrl && (
            <Button
              asChild
              variant="outline"
              className="border-white/30 hover:border-white/50 hover:bg-white/10 text-white backdrop-blur-sm flex-1"
            >
              <Link
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// Mobile Project Card Component
function MobileProjectCard({ project, index }) {
  const technologies = project.technologies || [];
  const displayTech = technologies.slice(0, 4);

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
      {/* Project Image */}
      {project.image && (
        <div className="relative w-full h-48 overflow-hidden">
          <div
            className="absolute inset-0 opacity-60"
            style={{ background: getProjectGradient(index) }}
          />
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title and Status */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white font-comic">
            {project.title}
          </h3>
          {project.featured && (
            <Badge className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] text-white border-0 ml-2">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        {displayTech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {displayTech.map((tech, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-xs border-white/20 text-white/80 bg-white/5"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge
                variant="outline"
                className="text-xs border-white/20 text-white/60 bg-white/5"
              >
                +{technologies.length - 4} more
              </Badge>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border-0 flex-1"
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" /> View Live
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/30 hover:border-white/50 hover:bg-white/10 text-white backdrop-blur-sm flex-1"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" /> Code
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
  const [isDesktop, setIsDesktop] = useState(false);

  // Load projects and auto-filter to featured only
  useEffect(() => {
    const list = projectsData.projects || [];
    setProjects(list);
    // Automatically show only featured projects
    const featuredProjects = list.filter((p) => p.featured);
    setFiltered(featuredProjects);
  }, []);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const total = filtered.length;
  const { sectionRef, activeIndex, progress, isHijacked, snapTo } =
    useScrollHijackProjects(total, { threshold: 0.3 });

  // Only set custom height for desktop, mobile uses natural content height
  const sectionHeight = isDesktop ? `${Math.max(total * 100, 300)}vh` : "auto";

  // Categories for filtering (though we're showing featured only)
  const categories = useMemo(() => {
    const uniqueCategories = [
      "All",
      ...new Set(projects.flatMap((p) => p.technologies || [])),
    ];
    return uniqueCategories.slice(0, 6); // Limit to prevent UI overflow
  }, [projects]);

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
      className="w-full bg-transparent lg:[height:var(--section-height)]"
      id="projects"
      ref={sectionRef}
      style={{
        "--section-height": sectionHeight,
      }}
    >
      {/* Section Header */}
      <div className="text-center">
        <p className="mb-3 text-xs font-normal tracking-widest text-white/70 uppercase md:text-sm">
          FEATURED CASE STUDIES
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-comic">
          <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent drop-shadow-lg">
            Projects
          </span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-2 font-comic drop-shadow px-4">
          A showcase of my recent work, featuring full-stack applications,
          mobile apps, and innovative solutions.
        </p>
      </div>

      {/* Main Projects Display */}
      <div className="hidden lg:flex h-screen max-h-screen w-[90%] mx-auto my-8 px-10 py-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl shadow-lg overflow-hidden">
        {/* Scroll hijacking indicator */}
        {isHijacked && (
          <div className="absolute top-4 right-4 z-50 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-white/70 border border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
              Scroll through projects ({activeIndex + 1}/{total})
            </div>
          </div>
        )}

        {/* Left side - Project Visuals */}
        <ProjectVisuals projects={filtered} idx={activeIndex} />

        {/* Right side - Project Details */}
        <ProjectDetails p={activeProject} isActive idx={activeIndex} />
      </div>

      {/* Mobile: Individual project cards */}
      <div className="lg:hidden space-y-8 px-4 pb-16">
        {filtered.map((project, index) => (
          <MobileProjectCard
            key={project.id || index}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 px-4">
        <p className="text-white/60 mb-6 text-lg">
          Want to see more projects or discuss a collaboration?
        </p>
        <Button
          asChild
          className="px-8 py-3 bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border-0"
        >
          <Link href="/projects">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
