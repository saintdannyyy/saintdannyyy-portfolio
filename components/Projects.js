"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ExternalLink,
  Github,
  Calendar,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import projectsData from "../data/projects.json";

// Custom hook for page-scroll-driven projects
const usePageScrollDrivenProjects = (projects) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section || projects.length === 0) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        // Calculate how much of the section has been scrolled through
        const scrolledIntoSection = Math.max(0, windowHeight - sectionTop);
        const totalScrollableHeight = sectionHeight + windowHeight;
        const scrollProgress = Math.min(
          scrolledIntoSection / totalScrollableHeight,
          1
        );

        // Map scroll progress to project index
        const newActiveIndex = Math.min(
          Math.floor(scrollProgress * projects.length),
          projects.length - 1
        );

        setActiveProjectIndex(Math.max(0, newActiveIndex));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  return [sectionRef, activeProjectIndex];
};

// Project Visual Component (Left side - visuals that change with page scroll)
const ProjectVisuals = ({ projects, activeProjectIndex, onProjectChange }) => {
  const getProjectGradient = (project, index) => {
    const gradients = [
      "linear-gradient(188.62deg, #6B0D33 49.9%, #EA3546 81.7%, #F86624 93.88%, #F9D793 113.5%)",
      "linear-gradient(188.62deg, #070E57 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)",
      "linear-gradient(188.62deg, #134E4A 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)",
      "linear-gradient(188.62deg, #3D1A7A 49.9%, #662E9B 81.7%, #EA3546 93.88%, #F9D793 113.5%)",
      "linear-gradient(188.62deg, #083926 49.9%, #059669 81.7%, #34D399 93.88%, #F9D793 113.5%)",
    ];
    return gradients[index % gradients.length];
  };

  const currentProject = projects[activeProjectIndex];

  return (
    <div className="w-[60%] relative flex items-center justify-center p-8">
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1.5 shadow-2xl w-full max-w-4xl h-[80vh] lg:rounded-3xl lg:p-2 border-white/15 hover:border-white/25 transition-all duration-500">
        {/* Top gradient border */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
          }}
        />

        {/* Main content container */}
        <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl from-black/40 to-transparent transition-all duration-500 bg-gradient-to-b">
          {/* Custom gradient background */}
          <div
            className="absolute inset-0 -z-1 opacity-80 transition-all duration-500"
            style={{
              background: getProjectGradient(
                currentProject,
                activeProjectIndex
              ),
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
            <h3 className="max-w-[90%] text-3xl font-bold tracking-wide transition-all duration-500">
              {currentProject.description}
            </h3>
            <ArrowRight className="size-6" />
          </div>

          {/* Project Image */}
          <div className="relative w-full max-w-[85%] translate-y-5 -rotate-3 lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 transition-all duration-500 will-change-transform">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              width={1203}
              height={753}
              className="w-full rounded-t-lg border-[1.5px] border-white/20 transition-all duration-500"
              style={{
                boxShadow: "0 0 30px rgba(59,130,246,0.5)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
        <div className="flex flex-col space-y-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-8 rounded-full transition-all duration-300 ${
                index === activeProjectIndex
                  ? "bg-white shadow-lg"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Project Details Component (Right side - fixed content that changes with animations)
const ProjectDetails = ({ project, index, isActive }) => {
  const [displayProject, setDisplayProject] = useState(project);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animate project details when active project changes
  useEffect(() => {
    if (displayProject.id !== project.id) {
      setIsAnimating(true);

      // Fade out old content
      setTimeout(() => {
        setDisplayProject(project);
        setIsAnimating(false);
      }, 150);
    }
  }, [project, displayProject.id]);

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
    <div className="w-[40%] p-8 flex flex-col justify-center bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-md">
      <div
        className={`max-w-md mx-auto transition-all duration-300 ease-out ${
          isAnimating
            ? "opacity-0 translate-y-4 scale-95"
            : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {/* Project Badge and Status with staggered animation */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-500 delay-100 ${
            isAnimating
              ? "opacity-0 translate-x-4"
              : "opacity-100 translate-x-0"
          }`}
        >
          {displayProject.featured && (
            <Badge className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] text-white border-0">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
          <Badge
            className={`${getStatusColor(
              displayProject.status
            )} border backdrop-blur-sm`}
          >
            {getStatusIcon(displayProject.status)}
            <span className="ml-1">{displayProject.status}</span>
          </Badge>
        </div>

        {/* Project Title with slide-in animation */}
        <div
          className={`space-y-2 mb-4 transition-all duration-500 delay-200 ${
            isAnimating
              ? "opacity-0 translate-x-4"
              : "opacity-100 translate-x-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-white leading-tight">
            {displayProject.title}
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            {displayProject.description}
          </p>
        </div>

        {/* Category and Year with fade-in animation */}
        <div
          className={`flex items-center gap-3 text-white/60 mb-6 transition-all duration-500 delay-300 ${
            isAnimating
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          <Badge
            variant="outline"
            className="text-white/70 border-white/30 bg-white/10 backdrop-blur-sm"
          >
            {displayProject.category}
          </Badge>
          <span>•</span>
          <span>{displayProject.year}</span>
        </div>

        {/* Key Highlights with staggered animation */}
        {displayProject.highlights && (
          <div
            className={`space-y-3 mb-6 transition-all duration-500 delay-400 ${
              isAnimating
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <h4 className="text-white font-semibold text-lg">Key Highlights</h4>
            <ul className="space-y-2">
              {displayProject.highlights
                .slice(0, 3)
                .map((highlight, hlIndex) => (
                  <li
                    key={hlIndex}
                    className={`text-white/80 flex items-start gap-3 transition-all duration-300 ${
                      isAnimating
                        ? "opacity-0 translate-x-4"
                        : "opacity-100 translate-x-0"
                    }`}
                    style={{ transitionDelay: `${500 + hlIndex * 100}ms` }}
                  >
                    <span className="text-[#EA3546] mt-1">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Technologies with cascading animation */}
        <div
          className={`space-y-3 mb-6 transition-all duration-500 delay-500 ${
            isAnimating
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h4 className="text-white font-semibold text-lg">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {displayProject.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                className={`bg-white/10 backdrop-blur-sm text-white/90 border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  isAnimating
                    ? "opacity-0 scale-95 translate-y-2"
                    : "opacity-100 scale-100 translate-y-0"
                }`}
                style={{ transitionDelay: `${600 + techIndex * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons with bounce-in animation */}
        <div
          className={`flex gap-4 pt-2 transition-all duration-500 delay-700 ${
            isAnimating
              ? "opacity-0 translate-y-4 scale-95"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {displayProject.liveUrl && (
            <Button
              asChild
              className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border-0 flex-1"
            >
              <Link
                href={displayProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
            </Button>
          )}

          {displayProject.githubUrl && (
            <Button
              asChild
              variant="outline"
              className="border-white/30 hover:border-white/50 hover:bg-white/10 text-white backdrop-blur-sm flex-1"
            >
              <Link
                href={displayProject.githubUrl}
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
};

// Main Projects Component
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Load projects from JSON
  useEffect(() => {
    setProjects(projectsData.projects);
    setFilteredProjects(projectsData.projects);
  }, []);

  // Filter projects
  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else if (filter === "Featured") {
      setFilteredProjects(projects.filter((project) => project.featured));
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === filter)
      );
    }
  }, [filter, projects]);

  // Get unique categories
  const categories = [
    "All",
    "Featured",
    ...new Set(projects.map((project) => project.category)),
  ];

  const [sectionRef, activeProjectIndex] =
    usePageScrollDrivenProjects(filteredProjects);

  if (filteredProjects.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <p className="text-white/60 text-lg">Loading projects...</p>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="w-full bg-transparent"
      id="projects"
      style={{ height: `${filteredProjects.length * 100}vh` }} // Make section tall enough for scroll effect
    >
      {/* Section Header */}
      <div className="text-center mb-8 pt-20">
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

      {/* Sticky Projects Display that responds to page scroll */}
      <div className="sticky top-0 h-screen">
        <div className="h-screen bg-black/10 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden mx-4">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-red-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,theme(colors.purple.600/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.red.600/0.15),transparent_50%)]" />

          <div className="relative flex h-full">
            {/* Left side - Project visuals that change with page scroll */}
            <ProjectVisuals
              projects={filteredProjects}
              activeProjectIndex={activeProjectIndex}
              onProjectChange={(index) => {}}
            />

            {/* Right side - Fixed project details with animations */}
            <ProjectDetails
              project={filteredProjects[activeProjectIndex]}
              index={activeProjectIndex}
              isActive={true}
            />
          </div>
        </div>
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
const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "On Going":
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
    <div
      ref={ref}
      className={`flex w-full flex-row will-change-auto transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <div className="flex flex-col lg:mx-10 lg:w-full">
        <Link
          href={project.liveUrl || project.githubUrl || "#"}
          target={project.liveUrl ? "_blank" : "_self"}
          rel={project.liveUrl ? "noopener noreferrer" : ""}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2 border-white/15 hover:border-white/25 transition-all duration-500"
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
            {/* Custom gradient background based on project */}
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background: project.featured
                  ? "linear-gradient(188.62deg, #6B0D33 49.9%, #662E9B 100%)"
                  : project.category === "Web Development"
                  ? "linear-gradient(188.62deg, #070E57 49.9%, #134E4A 100%)"
                  : project.category === "Mobile Development"
                  ? "linear-gradient(188.62deg, #134E4A 49.9%, #083926 100%)"
                  : "linear-gradient(188.62deg, #3D1A7A 49.9%, #6B0D33 100%)",
              }}
            />

            {/* Project Image */}
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add(
                    "bg-gradient-to-br",
                    "from-purple-600",
                    "to-blue-600"
                  );
                }}
              />

              {/* Image overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
              {/* Top badges */}
              <div className="flex items-start justify-between w-full">
                {/* Featured Badge */}
                {project.featured && (
                  <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-colors">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}

                {/* Status Badge */}
                <Badge
                  className={`${getStatusColor(
                    project.status
                  )} backdrop-blur-sm border-white/20`}
                >
                  {getStatusIcon(project.status)}
                  <span className="ml-1 text-xs">{project.status}</span>
                </Badge>
              </div>

              {/* Bottom content */}
              <div className="space-y-4">
                {/* Project title and category */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className="text-white/80 border-white/30 bg-white/10 backdrop-blur-sm text-xs"
                    >
                      {project.category}
                    </Badge>
                    <span className="text-white/60 text-xs">•</span>
                    <span className="text-white/60 text-xs">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-white/90 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-white/80 text-sm lg:text-base leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 max-w-full">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-white/10 backdrop-blur-sm text-white/90 border-white/20 text-xs hover:bg-white/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="bg-white/10 backdrop-blur-sm text-white/70 border-white/20 text-xs"
                    >
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 hover:border-white/40 transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 mr-1.5" />
                      Live Demo
                    </Button>
                  )}

                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 hover:border-white/40 transition-all duration-300"
                    >
                      <Github className="w-3 h-3 mr-1.5" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
