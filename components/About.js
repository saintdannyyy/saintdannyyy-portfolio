"use client";

import Image from "next/image";
import { ShineBorder } from "./magicui/shine-border";
import {
  ArrowUpRight,
  FileIcon,
  GithubIcon,
  Linkedin,
  TwitterIcon,
  YoutubeIcon,
  Code,
  Camera,
  Headphones,
  Music,
  Sun,
  Moon,
  Clock,
  Star,
  Palette,
  Video,
  Mic,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";

export default function About() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % personas.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideTimer);
  }, [isAutoPlay]);

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Define personas with different skills and themes
  const personas = [
    {
      id: "software-engineer",
      title: "Software Engineer",
      subtitle: "Building Digital Solutions",
      skills: [
        "Full Stack Development",
        "React & Next.js",
        "Node.js & Express",
        "Database Design",
        "DevOps & CI/CD",
      ],
      description:
        "Crafting scalable web applications and turning complex problems into elegant code solutions. I build the digital infrastructure that powers modern businesses.",
      mainIcon: Code,
      floatingIcons: [Code, Star, Clock],
      colors: {
        primary: "from-blue-500 to-purple-600",
        secondary: "from-purple-500 to-indigo-600",
        accent: "from-blue-400 to-purple-500",
        glow: "shadow-blue-500/30",
        bg: "from-blue-950/20 to-purple-950/20",
        text: "text-blue-300",
      },
    },
    {
      id: "videographer",
      title: "Videographer",
      subtitle: "Visual Storyteller",
      skills: [
        "Cinematic Production",
        "Video Editing",
        "Color Grading",
        "Motion Graphics",
        "Documentary",
      ],
      description:
        "Capturing life's moments and transforming them into compelling visual narratives. Every frame tells a story, every cut creates emotion.",
      mainIcon: Camera,
      floatingIcons: [Camera, Video, Palette],
      colors: {
        primary: "from-orange-400 to-red-500",
        secondary: "from-red-500 to-pink-600",
        accent: "from-orange-400 to-red-500",
        glow: "shadow-orange-500/30",
        bg: "from-orange-950/20 to-red-950/20",
        text: "text-orange-300",
      },
    },
    {
      id: "sound-engineer",
      title: "Sound Engineer",
      subtitle: "Audio Architect",
      skills: [
        "Audio Production",
        "Mixing & Mastering",
        "Sound Design",
        "Live Recording",
        "Post-Production",
      ],
      description:
        "Sculpting soundscapes and engineering crystal-clear audio experiences. From studio recordings to live events, I make every note perfect.",
      mainIcon: Headphones,
      floatingIcons: [Headphones, Mic, Music],
      colors: {
        primary: "from-green-400 to-teal-500",
        secondary: "from-teal-500 to-cyan-600",
        accent: "from-green-400 to-teal-500",
        glow: "shadow-green-500/30",
        bg: "from-green-950/20 to-teal-950/20",
        text: "text-green-300",
      },
    },
    {
      id: "content-creator",
      title: "Content Creator",
      subtitle: "Digital Innovator",
      skills: [
        "Content Strategy",
        "Social Media",
        "Brand Development",
        "Creative Direction",
        "Digital Marketing",
      ],
      description:
        "Creating engaging content that connects brands with audiences. I blend creativity with strategy to build meaningful digital experiences.",
      mainIcon: Star,
      floatingIcons: [Star, Palette, Camera],
      colors: {
        primary: "from-yellow-400 to-orange-500",
        secondary: "from-orange-500 to-red-500",
        accent: "from-yellow-400 to-orange-500",
        glow: "shadow-yellow-500/30",
        bg: "from-yellow-950/20 to-orange-950/20",
        text: "text-yellow-300",
      },
    },
  ];

  const currentPersona = personas[currentSlide];

  return (
    <div
      className={`relative flex justify-between items-center w-[80%] mx-auto px-6 py-20 min-h-[80vh] space-x-10 transition-all duration-1000 bg-gradient-to-br ${currentPersona.colors.bg}`}
      id="about"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dynamic particles */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={`${currentPersona.id}-${i}`}
            className={`absolute w-1 h-1 rounded-full opacity-40 animate-pulse bg-gradient-to-r ${currentPersona.colors.accent}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}

        {/* Time Indicator */}
        <div
          className={`absolute top-10 right-10 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-1000 ${currentPersona.colors.bg} ${currentPersona.colors.text}`}
        >
          <Clock className="w-5 h-5" />
          <span className="text-sm font-medium">
            {currentTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
          {personas.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 8000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? `bg-gradient-to-r ${currentPersona.colors.primary}`
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Left Section - Profile Image with sliding animations */}
      <div className="flex min-w-[40%] justify-center items-center relative">
        <div
          className={`relative w-[300px] h-[350px] rounded-3xl flex items-center justify-center p-1 shadow-2xl transition-all duration-1000 ${currentPersona.colors.glow}`}
        >
          <ShineBorder
            shineColor={
              currentPersona.colors.primary.includes("blue")
                ? ["#3B82F6", "#8B5CF6", "#6366F1"]
                : currentPersona.colors.primary.includes("orange")
                ? ["#F59E0B", "#F97316", "#EF4444"]
                : currentPersona.colors.primary.includes("green")
                ? ["#10B981", "#14B8A6", "#06B6D4"]
                : ["#EAB308", "#F59E0B", "#EF4444"]
            }
            borderWidth={3}
            duration={10}
          />
          <div className="absolute pl-5 pt-5">
            <Image
              src="/saintdannyyy.jpg"
              alt="Profile pic"
              width={300}
              height={300}
              className={`rounded-3xl object-cover transition-all duration-1000 ${
                currentPersona.id === "software-engineer"
                  ? "brightness-90 contrast-125 hue-rotate-15"
                  : currentPersona.id === "videographer"
                  ? "brightness-110 contrast-110 saturate-110"
                  : currentPersona.id === "sound-engineer"
                  ? "brightness-95 contrast-105 hue-rotate-30"
                  : "brightness-105 contrast-110 saturate-125"
              }`}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Floating Icons around image with smooth transitions */}
          {currentPersona.floatingIcons.map((Icon, index) => (
            <div
              key={`${currentPersona.id}-icon-${index}`}
              className={`absolute animate-bounce transition-all duration-1000 ${currentPersona.colors.text}`}
              style={{
                top: `${15 + index * 20}%`,
                right: `${5 + (index % 2) * 20}%`,
                animationDelay: `${index * 0.3}s`,
                opacity: 1,
                transform: `scale(${1 + index * 0.1})`,
              }}
            >
              <Icon className="w-6 h-6" />
            </div>
          ))}

          {/* Main persona icon overlay */}
          <div
            className={`absolute bottom-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-1000 ${currentPersona.colors.bg} ${currentPersona.colors.text}`}
          >
            <currentPersona.mainIcon className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Right Section - Content with sliding animations */}
      <div className="flex-1 overflow-hidden">
        <Separator className="my-2 w-12" />
        <h4
          className={`transition-colors duration-1000 ${currentPersona.colors.text}`}
        >
          About Me
        </h4>

        <p className="text-6xl md:text-7xl font-semibold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
            Daniel Addo
          </span>
        </p>

        {/* Sliding Title and Subtitle */}
        <div className="mb-6 relative h-20 overflow-hidden">
          {personas.map((persona, index) => (
            <div
              key={persona.id}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                index === currentSlide
                  ? "translate-x-0 opacity-100"
                  : index < currentSlide
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <h3
                className={`text-3xl font-bold bg-gradient-to-r ${persona.colors.primary} bg-clip-text text-transparent mb-2`}
              >
                {persona.title}
              </h3>
              <p className={`text-lg ${persona.colors.text} opacity-80`}>
                {persona.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Sliding Skills Tags */}
        <div className="mb-6 relative h-16 overflow-hidden">
          {personas.map((persona, index) => (
            <div
              key={`skills-${persona.id}`}
              className={`absolute inset-0 transition-all duration-1000 delay-200 transform ${
                index === currentSlide
                  ? "translate-x-0 opacity-100"
                  : index < currentSlide
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="flex flex-wrap gap-2">
                {persona.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-500 ${persona.colors.bg} ${persona.colors.text} border-current`}
                    style={{
                      transitionDelay: `${skillIndex * 100 + 400}ms`,
                      opacity: index === currentSlide ? 1 : 0,
                      transform:
                        index === currentSlide
                          ? "translateY(0)"
                          : "translateY(20px)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex space-x-3 mb-6">
          <Link href="https://github.com/yourusername">
            <GithubIcon
              className={`transition-colors duration-500 ${currentPersona.colors.text} hover:opacity-70`}
            />
          </Link>
          <Link href="https://linkedin.com/in/yourusername">
            <Linkedin
              className={`transition-colors duration-500 ${currentPersona.colors.text} hover:opacity-70`}
            />
          </Link>
          <Link href="https://twitter.com/yourusername">
            <TwitterIcon
              className={`transition-colors duration-500 ${currentPersona.colors.text} hover:opacity-70`}
            />
          </Link>
          <Link href="https://youtube.com/yourusername">
            <YoutubeIcon
              className={`transition-colors duration-500 ${currentPersona.colors.text} hover:opacity-70`}
            />
          </Link>
        </div>

        {/* Sliding Description */}
        <div className="w-[85%] mb-6 relative min-h-[120px] overflow-hidden">
          {personas.map((persona, index) => (
            <p
              key={`desc-${persona.id}`}
              className={`text-gray-400 leading-relaxed absolute inset-0 transition-all duration-1000 delay-300 transform ${
                index === currentSlide
                  ? "translate-y-0 opacity-100"
                  : index < currentSlide
                  ? "-translate-y-full opacity-0"
                  : "translate-y-full opacity-0"
              }`}
            >
              {persona.description}
            </p>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 items-center">
          <Button
            variant="primary"
            className={`relative px-6 py-4 font-medium rounded-full transition-all duration-500 bg-gradient-to-r ${currentPersona.colors.secondary} hover:scale-105 ${currentPersona.colors.glow}`}
          >
            Download Resume <ArrowUpRight />
          </Button>

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-500 ${currentPersona.colors.bg} ${currentPersona.colors.text} hover:opacity-70`}
          >
            {isAutoPlay ? (
              <>
                <Clock className="w-4 h-4" />
                <span className="text-sm">Auto Playing</span>
              </>
            ) : (
              <>
                <Star className="w-4 h-4" />
                <span className="text-sm">Manual Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
