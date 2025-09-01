"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
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

// Custom hook for intersection observer
const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

// Individual Project Card Component
const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

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
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <Card className="group bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Fallback to a gradient background if image fails to load
              e.target.style.display = "none";
              e.target.parentElement.classList.add(
                "bg-gradient-to-br",
                "from-purple-600",
                "to-blue-600"
              );
            }}
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-20">
              <Badge className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] text-white border-0">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-20">
            <Badge className={`${getStatusColor(project.status)} border`}>
              {getStatusIcon(project.status)}
              <span className="ml-1">{project.status}</span>
            </Badge>
          </div>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl text-white mb-2 group-hover:text-[#EA3546] transition-colors duration-300">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-400 flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="text-[#662E9B] border-[#662E9B]/30"
                >
                  {project.category}
                </Badge>
                <span className="text-sm">•</span>
                <span className="text-sm">{project.year}</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Description */}
          <p className="text-gray-300 leading-relaxed">{project.description}</p>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="bg-gray-800/50 text-gray-300 hover:bg-[#662E9B]/20 transition-colors duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, hlIndex) => (
                  <li
                    key={hlIndex}
                    className="text-gray-300 flex items-start gap-2 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 text-[#EA3546] mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {project.liveUrl && (
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}

            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                className="flex-1 border-gray-700 hover:border-gray-600 hover:bg-gray-800/50"
              >
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
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

  return (
    <div
      className="w-full py-10 sm:py-16 lg:py-20 bg-transparent"
      id="projects"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-comic">
            <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent drop-shadow-lg">
              Projects
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 font-comic drop-shadow px-4">
            A showcase of my recent work, featuring full-stack applications,
            mobile apps, and innovative solutions.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`${
                  filter === category
                    ? "bg-gradient-to-r from-[#EA3546] to-[#662E9B] text-white"
                    : "border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 text-gray-600"
                } transition-all duration-300`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 lg:py-20">
            <p className="text-gray-500 text-base sm:text-lg">
              No projects found for the selected filter.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16 px-4">
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Want to see more projects or discuss a collaboration?
          </p>
          <Button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
