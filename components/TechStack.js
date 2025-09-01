"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "./ui/badge";

// Tech stack data with icons and colors
const techStackData = [
  { name: "HTML", icon: "🌐", color: "bg-orange-500" },
  { name: "CSS", icon: "🎨", color: "bg-blue-400" },
  { name: "JavaScript", icon: "⚡", color: "bg-yellow-500" },
  { name: "TypeScript", icon: "📘", color: "bg-blue-600" },
  { name: "ReactJS", icon: "⚛️", color: "bg-cyan-500" },
  { name: "NextJS", icon: "🔺", color: "bg-gray-800" },
  { name: "Tailwind CSS", icon: "💨", color: "bg-teal-500" },
  { name: "Vite", icon: "⚡", color: "bg-purple-600" },
  { name: "Framer Motion", icon: "🎬", color: "bg-purple-500" },
  { name: "React Native", icon: "�", color: "bg-blue-500" },
  { name: "Expo", icon: "🚀", color: "bg-black" },
  { name: "EAS", icon: "☁️", color: "bg-indigo-600" },
  { name: "NodeJS", icon: "💚", color: "bg-green-600" },
  { name: "ExpressJS", icon: "🚂", color: "bg-gray-700" },
  { name: "Python", icon: "�", color: "bg-yellow-600" },
  { name: "FastAPI", icon: "🚀", color: "bg-green-500" },
  { name: "PHP", icon: "🐘", color: "bg-purple-700" },
  { name: "MySQL", icon: "�️", color: "bg-blue-600" },
  { name: "PostgreSQL", icon: "�", color: "bg-blue-700" },
  { name: "MongoDB", icon: "🍃", color: "bg-green-500" },
  { name: "Supabase", icon: "⚡", color: "bg-emerald-600" },
  { name: "Swagger", icon: "📋", color: "bg-green-600" },
  { name: "Git", icon: "🌿", color: "bg-orange-600" },
  { name: "Github", icon: "🐙", color: "bg-gray-800" },
  { name: "Vercel", icon: "▲", color: "bg-black" },
  { name: "Netlify", icon: "🌊", color: "bg-teal-600" },
  { name: "Render", icon: "🏗️", color: "bg-purple-600" },
  { name: "Hugging Face", icon: "🤗", color: "bg-yellow-500" },
  { name: "Figma", icon: "�", color: "bg-red-500" },
  { name: "Postman", icon: "📮", color: "bg-orange-500" },
  { name: "Linux", icon: "🐧", color: "bg-yellow-600" },
  { name: "Shadcn", icon: "🎭", color: "bg-slate-700" },
];

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

// Animated Tech Badge Component
const AnimatedTechBadge = ({ tech, index, isVisible }) => {
  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        animationDelay: `${index * 150}ms`,
      }}
    >
      <Badge
        className={`
          ${tech.color} 
          text-white 
          px-4 py-2 
          text-sm 
          font-medium 
          border-0 
          shadow-lg 
          hover:scale-105 
          hover:shadow-xl 
          transition-all 
          duration-300 
          cursor-pointer
          backdrop-blur-sm
          flex 
          items-center 
          gap-2
          group
        `}
      >
        <span className="text-base group-hover:animate-bounce">
          {tech.icon}
        </span>
        <span className="font-comic">{tech.name}</span>
      </Badge>
    </div>
  );
};

// Main TechStack Component
export default function TechStack() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setTitleVisible(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div
      className="w-full py-10 sm:py-16 lg:py-20 bg-transparent"
      id="tech-stack"
      ref={ref}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Typewriter Effect */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="mb-4">
            <span
              className={`
                text-sm sm:text-base 
                font-medium 
                text-gray-400 
                uppercase 
                tracking-wider 
                transition-all 
                duration-700 
                font-comic
                ${
                  titleVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >
              My Stack
            </span>
          </div>

          <h2
            className={`
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-bold 
              mb-4 
              font-comic
              transition-all 
              duration-1000
              ${
                titleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
              Tools & Inspirations
            </span>
          </h2>
        </div>

        {/* Animated Tech Stack Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-6xl mx-auto">
          {techStackData.map((tech, index) => (
            <AnimatedTechBadge
              key={tech.name}
              tech={tech}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating particles */}
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className={`
                absolute 
                w-2 h-2 
                bg-gradient-to-r from-[#EA3546] to-[#662E9B] 
                rounded-full 
                opacity-20 
                animate-float
                ${isVisible ? "animate-pulse" : ""}
              `}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`
            text-center 
            mt-16 
            transition-all 
            duration-1000
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
          style={{ transitionDelay: `${techStackData.length * 150 + 500}ms` }}
        >
          <p className="text-gray-400 mb-6 font-comic">
            These are the tools that power my creative process and bring ideas
            to life. <br /> Interested in working with these technologies? Let's
            build something amazing together.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#EA3546] to-[#662E9B] rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto font-comic">
            ⚡ Let's Collaborate
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
