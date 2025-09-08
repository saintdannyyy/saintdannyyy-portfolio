"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  ExternalLink,
  Github,
  Calendar,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Home as HomeIcon,
  User,
  FolderOpen,
  Mail,
  Filter,
  Grid,
  List,
} from "lucide-react";
import projectsData from "../../data/projects.json";

// Custom Icons for social media (same as main page)
const Icons = {
  github: (props) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
};

// Navigation data
const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#about", icon: User, label: "About" },
    { href: "/projects", icon: FolderOpen, label: "Projects" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saintdannyyy",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-ntiri-addo/",
        icon: Icons.linkedin,
      },
      Email: {
        name: "Send Email",
        url: "mailto:danieltesla746@gmail.com",
        icon: Mail,
      },
    },
  },
};

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
const ProjectCard = ({ project, index, viewMode }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
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

  const isListView = viewMode === "list";

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <Card
        className={`group bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden ${
          isListView ? "flex flex-row" : ""
        }`}
      >
        {/* Project Image */}
        <div
          className={`relative overflow-hidden ${
            isListView ? "w-64 min-w-64" : "h-64"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
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

        <div className="flex-1">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl text-white mb-2 group-hover:text-[#EA3546] transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 flex items-center gap-2 flex-wrap">
                  {Array.isArray(project.category) ? (
                    project.category.map((cat, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-[#662E9B] border-[#662E9B]/30"
                      >
                        {cat}
                      </Badge>
                    ))
                  ) : (
                    <Badge
                      variant="outline"
                      className="text-[#662E9B] border-[#662E9B]/30"
                    >
                      {project.category}
                    </Badge>
                  )}
                  <span className="text-sm">•</span>
                  <span className="text-sm">{project.year}</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>

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
                  {project.highlights
                    .slice(0, isListView ? 3 : 999)
                    .map((highlight, hlIndex) => (
                      <li
                        key={hlIndex}
                        className="text-gray-300 flex items-start gap-2 text-sm"
                      >
                        <ArrowRight className="w-3 h-3 text-[#EA3546] mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  {isListView && project.highlights.length > 3 && (
                    <li className="text-gray-400 text-sm italic">
                      +{project.highlights.length - 3} more features...
                    </li>
                  )}
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
        </div>
      </Card>
    </div>
  );
};

// Main Projects Page Component
export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("year");

  // Load projects from JSON
  useEffect(() => {
    setProjects(projectsData.projects);
    setFilteredProjects(projectsData.projects);
  }, []);

  // Filter and sort projects
  useEffect(() => {
    let filtered = projects;

    if (filter === "Featured") {
      filtered = projects.filter((project) => project.featured);
    } else if (filter !== "All") {
      filtered = projects.filter((project) => {
        if (Array.isArray(project.category)) {
          return project.category.includes(filter);
        }
        return project.category === filter;
      });
    }

    // Sort projects
    if (sortBy === "year") {
      filtered = filtered.sort((a, b) => b.year - a.year);
    } else if (sortBy === "name") {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "status") {
      filtered = filtered.sort((a, b) => {
        const statusOrder = { "On Going": 0, Completed: 1 };
        return statusOrder[a.status] - statusOrder[b.status];
      });
    }

    setFilteredProjects(filtered);
  }, [filter, projects, sortBy]);

  // Get unique categories
  const categories = [
    "All",
    "Featured",
    ...new Set(
      projects.flatMap((project) =>
        Array.isArray(project.category) ? project.category : [project.category]
      )
    ),
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-20 pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-comic">
              <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent drop-shadow-lg">
                All Projects
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8 font-comic drop-shadow">
              Explore my complete portfolio of web applications, mobile apps,
              and innovative solutions. Each project represents a unique
              challenge solved with cutting-edge technology and creative
              thinking.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#EA3546]">
                  {projects.length}
                </div>
                <div className="text-sm text-gray-400">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#662E9B]">
                  {projects.filter((p) => p.status === "Completed").length}
                </div>
                <div className="text-sm text-gray-400">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  {projects.filter((p) => p.status === "On Going").length}
                </div>
                <div className="text-sm text-gray-400">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">
                  {projects.filter((p) => p.featured).length}
                </div>
                <div className="text-sm text-gray-400">Featured</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8 items-center justify-between">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className={`${
                    filter === category
                      ? "bg-gradient-to-r from-[#EA3546] to-[#662E9B] text-white"
                      : "border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 text-gray-300"
                  } transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#662E9B] focus:border-transparent"
              >
                <option value="year">Sort by Year</option>
                <option value="name">Sort by Name</option>
                <option value="status">Sort by Status</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-700 rounded-md overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-none ${
                    viewMode === "grid"
                      ? "bg-[#662E9B] hover:bg-[#662E9B]/80"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`rounded-none ${
                    viewMode === "list"
                      ? "bg-[#662E9B] hover:bg-[#662E9B]/80"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Projects Count */}
          <div className="text-center mb-6">
            <p className="text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
              {filter !== "All" && ` in "${filter}"`}
            </p>
          </div>

          {/* Projects Grid/List */}
          <div
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
                : "space-y-6"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                viewMode={viewMode}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 mb-6">
                No projects match the selected filter: "{filter}"
              </p>
              <Button
                onClick={() => setFilter("All")}
                className="bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                View All Projects
              </Button>
            </div>
          )}

          {/* Call to Action */}
          {filteredProjects.length > 0 && (
            <div className="text-center mt-16 px-4">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 font-comic">
                  Interested in working together?
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  I'm always open to discussing new opportunities,
                  collaborations, or innovative projects. Let's create something
                  amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="px-8 py-3 bg-gradient-to-r from-[#EA3546] to-[#662E9B] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="mailto:danieltesla746@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Get In Touch
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="px-8 py-3 border-gray-700 hover:border-gray-600 hover:bg-gray-800/50"
                  >
                    <Link
                      href="https://github.com/saintdannyyy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Dock with full functionality */}
      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
        <TooltipProvider>
          <Dock
            direction="middle"
            strokeWidth={0}
            className="border-t border-white/30"
          >
            {/* Navigation Items */}
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full hover:bg-white/10 transition-colors"
                      )}
                    >
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

            {/* Separator */}
            <Separator orientation="vertical" className="h-full bg-white/20" />

            {/* Social Media Links */}
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full hover:bg-white/10 transition-colors"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </div>
    </div>
  );
}
