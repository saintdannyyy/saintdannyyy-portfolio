"use client";

import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Settings,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

// Tech stack data organized by categories
const techStackData = {
  Frontend: {
    icon: <Code className="w-6 h-6" />,
    description: "Creating beautiful, responsive user interfaces",
    technologies: [
      {
        name: "React",
        level: 95,
        experience: "4+ years",
        color: "bg-blue-500",
        featured: true,
      },
      {
        name: "Next.js",
        level: 90,
        experience: "3+ years",
        color: "bg-gray-800",
        featured: true,
      },
      {
        name: "Vue.js",
        level: 85,
        experience: "2+ years",
        color: "bg-green-500",
        featured: false,
      },
      {
        name: "TypeScript",
        level: 88,
        experience: "3+ years",
        color: "bg-blue-600",
        featured: true,
      },
      {
        name: "JavaScript",
        level: 95,
        experience: "5+ years",
        color: "bg-yellow-500",
        featured: true,
      },
      {
        name: "HTML5",
        level: 98,
        experience: "5+ years",
        color: "bg-orange-500",
        featured: false,
      },
      {
        name: "CSS3",
        level: 92,
        experience: "5+ years",
        color: "bg-blue-400",
        featured: false,
      },
      {
        name: "Tailwind CSS",
        level: 90,
        experience: "2+ years",
        color: "bg-cyan-500",
        featured: true,
      },
      {
        name: "SASS/SCSS",
        level: 85,
        experience: "3+ years",
        color: "bg-pink-500",
        featured: false,
      },
    ],
  },
  Backend: {
    icon: <Database className="w-6 h-6" />,
    description: "Building robust server-side applications and APIs",
    technologies: [
      {
        name: "Node.js",
        level: 92,
        experience: "4+ years",
        color: "bg-green-600",
        featured: true,
      },
      {
        name: "Express.js",
        level: 90,
        experience: "4+ years",
        color: "bg-gray-700",
        featured: true,
      },
      {
        name: "Python",
        level: 85,
        experience: "3+ years",
        color: "bg-blue-500",
        featured: true,
      },
      {
        name: "FastAPI",
        level: 80,
        experience: "2+ years",
        color: "bg-green-500",
        featured: false,
      },
      {
        name: "Django",
        level: 75,
        experience: "2+ years",
        color: "bg-green-700",
        featured: false,
      },
      {
        name: "PHP",
        level: 78,
        experience: "2+ years",
        color: "bg-purple-600",
        featured: false,
      },
      {
        name: "Laravel",
        level: 75,
        experience: "2+ years",
        color: "bg-red-500",
        featured: false,
      },
      {
        name: "GraphQL",
        level: 82,
        experience: "2+ years",
        color: "bg-pink-600",
        featured: true,
      },
      {
        name: "REST APIs",
        level: 95,
        experience: "4+ years",
        color: "bg-indigo-500",
        featured: true,
      },
    ],
  },
  Database: {
    icon: <Database className="w-6 h-6" />,
    description: "Managing and optimizing data storage solutions",
    technologies: [
      {
        name: "MongoDB",
        level: 88,
        experience: "3+ years",
        color: "bg-green-600",
        featured: true,
      },
      {
        name: "PostgreSQL",
        level: 85,
        experience: "3+ years",
        color: "bg-blue-600",
        featured: true,
      },
      {
        name: "MySQL",
        level: 90,
        experience: "4+ years",
        color: "bg-orange-500",
        featured: true,
      },
      {
        name: "Redis",
        level: 80,
        experience: "2+ years",
        color: "bg-red-600",
        featured: false,
      },
      {
        name: "Firebase",
        level: 85,
        experience: "2+ years",
        color: "bg-yellow-500",
        featured: false,
      },
      {
        name: "SQLite",
        level: 88,
        experience: "3+ years",
        color: "bg-blue-400",
        featured: false,
      },
    ],
  },
  "Cloud & DevOps": {
    icon: <Cloud className="w-6 h-6" />,
    description: "Deploying and scaling applications in the cloud",
    technologies: [
      {
        name: "AWS",
        level: 82,
        experience: "2+ years",
        color: "bg-orange-500",
        featured: true,
      },
      {
        name: "Docker",
        level: 85,
        experience: "2+ years",
        color: "bg-blue-500",
        featured: true,
      },
      {
        name: "Kubernetes",
        level: 75,
        experience: "1+ year",
        color: "bg-blue-600",
        featured: false,
      },
      {
        name: "Vercel",
        level: 90,
        experience: "3+ years",
        color: "bg-gray-800",
        featured: true,
      },
      {
        name: "Netlify",
        level: 88,
        experience: "2+ years",
        color: "bg-teal-500",
        featured: false,
      },
      {
        name: "GitHub Actions",
        level: 80,
        experience: "2+ years",
        color: "bg-gray-700",
        featured: false,
      },
      {
        name: "CI/CD",
        level: 82,
        experience: "2+ years",
        color: "bg-purple-600",
        featured: true,
      },
    ],
  },
  Mobile: {
    icon: <Smartphone className="w-6 h-6" />,
    description: "Creating cross-platform mobile applications",
    technologies: [
      {
        name: "React Native",
        level: 85,
        experience: "2+ years",
        color: "bg-blue-500",
        featured: true,
      },
      {
        name: "Expo",
        level: 88,
        experience: "2+ years",
        color: "bg-gray-800",
        featured: true,
      },
      {
        name: "Flutter",
        level: 70,
        experience: "1+ year",
        color: "bg-blue-400",
        featured: false,
      },
      {
        name: "Ionic",
        level: 72,
        experience: "1+ year",
        color: "bg-blue-600",
        featured: false,
      },
    ],
  },
  "Tools & Others": {
    icon: <Settings className="w-6 h-6" />,
    description: "Development tools and additional technologies",
    technologies: [
      {
        name: "Git",
        level: 95,
        experience: "5+ years",
        color: "bg-orange-600",
        featured: true,
      },
      {
        name: "VS Code",
        level: 98,
        experience: "5+ years",
        color: "bg-blue-500",
        featured: true,
      },
      {
        name: "Figma",
        level: 80,
        experience: "2+ years",
        color: "bg-purple-500",
        featured: false,
      },
      {
        name: "Jest",
        level: 82,
        experience: "2+ years",
        color: "bg-red-500",
        featured: false,
      },
      {
        name: "Webpack",
        level: 78,
        experience: "2+ years",
        color: "bg-blue-600",
        featured: false,
      },
      {
        name: "Vite",
        level: 85,
        experience: "1+ year",
        color: "bg-purple-600",
        featured: true,
      },
      {
        name: "Postman",
        level: 90,
        experience: "3+ years",
        color: "bg-orange-500",
        featured: false,
      },
    ],
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

// Skill Bar Component
const SkillBar = ({ skill, index, isVisible }) => {
  return (
    <div
      className={`group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">{skill.name}</span>
          {skill.featured && (
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">{skill.experience}</span>
          <span className="text-gray-300 text-sm font-semibold">
            {skill.level}%
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
            skill.color
          } ${isVisible ? `w-[${skill.level}%]` : "w-0"}`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 100 + 300}ms`,
          }}
        />
      </div>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ category, data, index }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-800 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl text-white">
            <div className="p-2 bg-gradient-to-r from-[#EA3546] to-[#662E9B] rounded-lg">
              {data.icon}
            </div>
            {category}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {data.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {data.technologies.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={skillIndex}
              isVisible={isVisible}
            />
          ))}

          {/* Featured Technologies Summary */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <div className="flex flex-wrap gap-2">
              {data.technologies
                .filter((tech) => tech.featured)
                .map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    className="bg-gradient-to-r from-[#EA3546]/20 to-[#662E9B]/20 border border-[#662E9B]/30 text-gray-300 hover:bg-[#662E9B]/30 transition-colors duration-200"
                  >
                    <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
                    {tech.name}
                  </Badge>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Stats Component
const TechStats = () => {
  const totalTechnologies = Object.values(techStackData).reduce(
    (total, category) => total + category.technologies.length,
    0
  );

  const featuredTechnologies = Object.values(techStackData).reduce(
    (total, category) =>
      total + category.technologies.filter((tech) => tech.featured).length,
    0
  );

  const averageExperience =
    Object.values(techStackData).reduce((total, category) => {
      const categoryAvg =
        category.technologies.reduce((sum, tech) => sum + tech.level, 0) /
        category.technologies.length;
      return total + categoryAvg;
    }, 0) / Object.keys(techStackData).length;

  const stats = [
    {
      icon: <Code className="w-6 h-6" />,
      label: "Technologies",
      value: totalTechnologies,
      suffix: "+",
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: "Featured Skills",
      value: featuredTechnologies,
      suffix: "",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Average Proficiency",
      value: Math.round(averageExperience),
      suffix: "%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-700 text-center"
        >
          <CardContent className="pt-6">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-gradient-to-r from-[#EA3546] to-[#662E9B] rounded-full">
                {stat.icon}
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {stat.value}
              {stat.suffix}
            </div>
            <div className="text-gray-400">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Main TechStack Component
export default function TechStack() {
  return (
    <div className="w-full py-20 bg-transparent" id="tech-stack">
      <div className="w-[80%] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            A comprehensive overview of the technologies, frameworks, and tools
            I use to build innovative solutions.
          </p>

          {/* Stats */}
          <TechStats />
        </div>

        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(techStackData).map(([category, data], index) => (
            <CategoryCard
              key={category}
              category={category}
              data={data}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Interested in working with these technologies? Let's build something
            amazing together.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#EA3546] to-[#662E9B] rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
            <Zap className="w-4 h-4" />
            Let's Collaborate
          </button>
        </div>
      </div>
    </div>
  );
}
