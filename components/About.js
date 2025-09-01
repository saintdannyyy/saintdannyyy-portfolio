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
import { Badge } from "./ui/badge";

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
      image: "/saintdannyyy.jpg",
      skills: [
        "Full Stack Development",
        "Web & Mobile Development",
        "AI Integration",
      ],
      description:
        "Crafting scalable web and mobile applications and turning complex problems into elegant code solutions.",
      mainIcon: Code,
      floatingIcons: [Code, Star, Clock],
      colors: {
        primary: "from-blue-400/60 to-purple-500/60",
        secondary: "from-purple-400/60 to-indigo-500/60",
        accent: "from-blue-300/40 to-purple-400/40",
        glow: "shadow-blue-500/20",
        bg: "from-blue-950/10 to-purple-950/10",
        text: "text-blue-200",
      },
    },
    {
      id: "videographer",
      title: "Videographer",
      subtitle: "Visual Storyteller",
      image: "/video.jpg",
      skills: ["Cinematic Production", "Events Coverage", "Video Editing"],
      description:
        "Capturing life's moments and transforming them into compelling visual narratives. Every frame tells a story, every cut creates emotion.",
      mainIcon: Camera,
      floatingIcons: [Camera, Video, Palette],
      colors: {
        primary: "from-orange-400/60 to-red-400/60",
        secondary: "from-red-400/60 to-pink-500/60",
        accent: "from-orange-300/40 to-red-400/40",
        glow: "shadow-orange-500/20",
        bg: "from-orange-950/10 to-red-950/10",
        text: "text-orange-200",
      },
    },
    {
      id: "sound-engineer",
      title: "Sound Engineer",
      subtitle: "Audio Architect",
      image: "/sound.PNG",
      skills: [
        "Mixing & Mastering",
        "Sound Design",
        "Live Recording",
        "Post-Production",
      ],
      description:
        "Engineering crystal-clear audio experiences during live events, I make every note perfect.",
      mainIcon: Headphones,
      floatingIcons: [Headphones, Mic, Music],
      colors: {
        primary: "from-green-400/60 to-teal-400/60",
        secondary: "from-teal-400/60 to-cyan-500/60",
        accent: "from-green-300/40 to-teal-400/40",
        glow: "shadow-green-500/20",
        bg: "from-green-950/10 to-teal-950/10",
        text: "text-green-200",
      },
    },
    {
      id: "content-creator",
      title: "Content Creator",
      subtitle: "Digital Innovator",
      image: "/content.jpg",
      skills: [
        "Content Strategy",
        "Social Media",
        "Brand Development",
        "Creative Direction",
      ],
      description:
        "Creating engaging content that spread the knowledge of the ever evolving world of tech.",
      mainIcon: Star,
      floatingIcons: [Star, Palette, Camera],
      colors: {
        primary: "from-yellow-400/60 to-orange-400/60",
        secondary: "from-orange-400/60 to-red-400/60",
        accent: "from-yellow-300/40 to-orange-400/40",
        glow: "shadow-yellow-500/20",
        bg: "from-yellow-950/10 to-orange-950/10",
        text: "text-yellow-200",
      },
    },
  ];

  const currentPersona = personas[currentSlide];

  return (
    <div
      className={`relative flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 min-h-[80vh] lg:space-x-10 space-y-8 lg:space-y-0 transition-all duration-1000 bg-gradient-to-br ${currentPersona.colors.bg} overflow-hidden`}
      id="about"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Animated Background Gradient Orbs */}
        <div
          className={`absolute top-10 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse bg-gradient-to-br ${currentPersona.colors.primary} transition-all duration-2000`}
          style={{
            animationDuration: "6s",
            animation:
              "float 20s ease-in-out infinite, breathe 8s ease-in-out infinite",
          }}
        />
        <div
          className={`absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5 blur-2xl animate-pulse bg-gradient-to-br ${currentPersona.colors.accent} transition-all duration-2000`}
          style={{
            animationDuration: "10s",
            animationDelay: "4s",
            animation:
              "float 30s ease-in-out infinite, breathe 15s ease-in-out infinite",
          }}
        />
        {/* Additional atmospheric layers */}
        <div
          className={`absolute top-1/4 right-1/3 w-72 h-72 rounded-full opacity-4 blur-3xl bg-gradient-to-br ${currentPersona.colors.primary} transition-all duration-2000`}
          style={{
            animation:
              "float 18s ease-in-out infinite reverse, morphing 20s ease-in-out infinite reverse",
          }}
        />
        <div
          className={`absolute bottom-1/3 left-1/4 w-88 h-88 rounded-full opacity-6 blur-3xl bg-gradient-to-br ${currentPersona.colors.accent} transition-all duration-2000`}
          style={{
            animation:
              "float 22s ease-in-out infinite, breathe 10s ease-in-out infinite reverse",
          }}
        />

        {/* Floating Geometric Shapes */}
        {currentPersona.id === "software-engineer" && (
          <>
            <div
              className="absolute top-20 left-20 w-4 h-4 bg-blue-400/15 rotate-45 animate-bounce"
              style={{ animationDuration: "3s" }}
            />
            <div
              className="absolute top-40 right-32 w-6 h-6 bg-purple-400/15 rotate-12 animate-bounce"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-32 left-40 w-3 h-3 bg-indigo-400/15 rotate-45 animate-bounce"
              style={{ animationDuration: "5s", animationDelay: "2s" }}
            />
          </>
        )}

        {currentPersona.id === "videographer" && (
          <>
            <div
              className="absolute top-16 right-40 w-8 h-2 bg-orange-400/20 animate-pulse"
              style={{ animationDuration: "2s" }}
            />
            <div
              className="absolute top-60 left-32 w-6 h-6 bg-red-400/15 rounded-full animate-pulse"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-40 right-60 w-4 h-8 bg-pink-400/15 animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "2s" }}
            />
          </>
        )}

        {currentPersona.id === "sound-engineer" && (
          <>
            <div
              className="absolute top-24 left-32 w-1 h-12 bg-green-400/20 animate-pulse"
              style={{ animationDuration: "1s" }}
            />
            <div
              className="absolute top-32 left-36 w-1 h-8 bg-teal-400/20 animate-pulse"
              style={{ animationDuration: "1.5s", animationDelay: "0.2s" }}
            />
            <div
              className="absolute top-28 left-40 w-1 h-16 bg-cyan-400/20 animate-pulse"
              style={{ animationDuration: "2s", animationDelay: "0.4s" }}
            />
            <div
              className="absolute bottom-32 right-40 w-1 h-10 bg-green-400/20 animate-pulse"
              style={{ animationDuration: "1.8s", animationDelay: "0.6s" }}
            />
          </>
        )}

        {currentPersona.id === "content-creator" && (
          <>
            <div
              className="absolute top-20 right-20 w-6 h-6 bg-yellow-400/15 rounded-full animate-spin"
              style={{ animationDuration: "8s" }}
            />
            <div
              className="absolute bottom-20 left-20 w-4 h-4 bg-orange-400/15 rotate-45 animate-spin"
              style={{ animationDuration: "6s", animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/2 right-1/3 w-8 h-8 bg-red-400/10 rounded-full animate-ping"
              style={{ animationDuration: "4s" }}
            />
          </>
        )}

        {/* Enhanced Dynamic particles with persona-specific behavior */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`${currentPersona.id}-${i}`}
            className={`absolute rounded-full opacity-20 transition-all duration-2000 ${
              currentPersona.id === "software-engineer"
                ? "w-1 h-1 animate-ping bg-gradient-to-r from-blue-400/50 to-purple-500/50"
                : currentPersona.id === "videographer"
                ? "w-2 h-1 animate-pulse bg-gradient-to-r from-orange-400/50 to-red-500/50"
                : currentPersona.id === "sound-engineer"
                ? "w-1 h-2 animate-bounce bg-gradient-to-r from-green-400/50 to-teal-500/50"
                : "w-1.5 h-1.5 animate-pulse bg-gradient-to-r from-yellow-400/50 to-orange-500/50"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              transform: `scale(${0.5 + Math.random()}) rotate(${
                Math.random() * 360
              }deg)`,
            }}
          />
        ))}

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className={`w-full h-full bg-gradient-to-br ${currentPersona.colors.primary}`}
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px),
                                   radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
              animation: "float 20s ease-in-out infinite",
            }}
          />
        </div>

        {/* Persona-specific animated elements */}
        {currentPersona.id === "software-engineer" && (
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-20 left-1/4 text-6xl text-blue-400 animate-pulse"
              style={{ animationDuration: "4s" }}
            >
              {"{"}
            </div>
            <div
              className="absolute bottom-20 right-1/4 text-6xl text-purple-400 animate-pulse"
              style={{ animationDuration: "5s", animationDelay: "2s" }}
            >
              {"}"}
            </div>
            <div
              className="absolute top-1/2 left-1/3 text-4xl text-indigo-400 animate-pulse"
              style={{ animationDuration: "6s", animationDelay: "1s" }}
            >
              {"<>"}
            </div>
          </div>
        )}

        {currentPersona.id === "videographer" && (
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-1/4 right-1/4 w-20 h-12 border-2 border-orange-400 rounded animate-pulse"
              style={{ animationDuration: "3s" }}
            />
            <div
              className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-red-400 rounded-full animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
          </div>
        )}

        {currentPersona.id === "sound-engineer" && (
          <div className="absolute inset-0 opacity-8">
            {/* Sound wave visualization */}
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="absolute bg-green-400/20 animate-pulse"
                style={{
                  left: `${20 + i * 5}%`,
                  bottom: "30%",
                  width: "2px",
                  height: `${20 + Math.sin(i) * 15}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "1.5s",
                }}
              />
            ))}
          </div>
        )}

        {currentPersona.id === "content-creator" && (
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 text-5xl text-yellow-400 animate-pulse">
              ✨
            </div>
            <div
              className="absolute bottom-1/4 right-1/3 text-4xl text-orange-400 animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              🎨
            </div>
            <div
              className="absolute top-1/2 right-1/4 text-3xl text-red-400 animate-pulse"
              style={{ animationDelay: "2s" }}
            >
              💡
            </div>
          </div>
        )}

        {/* Time Indicator */}
        <div
          className={`absolute top-10 right-10 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-1000 ${currentPersona.colors.bg} ${currentPersona.colors.text} border border-current/20`}
        >
          <Clock className="w-5 h-5" />
          <span className="text-sm font-medium">
            {currentTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {/* Enhanced Progress Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black/20 backdrop-blur-md p-3 rounded-full border border-white/10">
          {personas.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 8000);
              }}
              className={`w-4 h-4 rounded-full transition-all duration-500 relative overflow-hidden ${
                index === currentSlide
                  ? `bg-gradient-to-r ${currentPersona.colors.primary} shadow-lg ${currentPersona.colors.glow}`
                  : "bg-gray-600/50 hover:bg-gray-500/70"
              }`}
            >
              {index === currentSlide && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${currentPersona.colors.primary} animate-pulse`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Ambient Light Effect */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-radial ${currentPersona.colors.primary} opacity-2 transition-all duration-2000`}
          style={{
            background: `radial-gradient(circle at 30% 70%, ${
              currentPersona.colors.primary.split(" ")[1]
            } 0%, transparent 50%)`,
          }}
        />
      </div>
      {/* Left Section - Profile Image with sliding animations */}
      <div className="flex w-full lg:w-auto lg:min-w-[40%] justify-center items-center relative order-1 lg:order-1">
        <div
          className={`relative w-[280px] h-[320px] sm:w-[300px] sm:h-[350px] lg:w-[320px] lg:h-[380px] rounded-3xl flex items-center justify-center p-1 shadow-2xl transition-all duration-1000 ${currentPersona.colors.glow}`}
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
            <div className="relative">
              <Image
                key={currentPersona.id}
                src={currentPersona.image}
                alt={`${currentPersona.title} Profile`}
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

              {/* Persona indicator overlay */}
              <div
                className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-1000 ${
                  currentPersona.id === "software-engineer"
                    ? "bg-blue-500/80 shadow-blue-500/50"
                    : currentPersona.id === "videographer"
                    ? "bg-orange-500/80 shadow-orange-500/50"
                    : currentPersona.id === "sound-engineer"
                    ? "bg-green-500/80 shadow-green-500/50"
                    : "bg-yellow-500/80 shadow-yellow-500/50"
                } shadow-lg backdrop-blur-sm`}
              >
                <currentPersona.mainIcon className="w-4 h-4 text-white" />
              </div>
            </div>
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
      <div className="flex-1 overflow-hidden w-full lg:w-auto text-center lg:text-left order-2 lg:order-2">
        <Badge
          className={`px-3 py-1 sm:px-4 sm:py-2 mb-2 rounded-full text-sm sm:text-md font-medium border transition-all duration-500 ${currentPersona.colors.text} border-current`}
        >
          About Me
        </Badge>

        <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold leading-tight mb-3 font-comic">
          I am a ...
        </p>

        {/* Sliding Title and Subtitle */}
        <div className="mb-0 relative h-20 overflow-hidden">
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
        <div className="mb-2 relative h-10 overflow-hidden">
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
          <Link href="https://github.com/saintdannyyy">
            <GithubIcon
              className={`transition-colors duration-500 ${currentPersona.colors.text} hover:opacity-70`}
            />
          </Link>
          <Link href="https://linkedin.com/in/saintdannyyy">
            <Linkedin
              className={`transition-colors duration-500 ${currentPersona.colors.text} hover:opacity-70`}
            />
          </Link>
          <Link href="https://twitter.com/saintdannyyy">
            <TwitterIcon
              className={`transition-colors duration-500 ${currentPersona.colors.text} hover:opacity-70`}
            />
          </Link>
          <Link href="https://youtube.com/saintdannyyy">
            <YoutubeIcon
              className={`transition-colors duration-500 ${currentPersona.colors.text} hover:opacity-70`}
            />
          </Link>
        </div>

        {/* Sliding Description */}
        <div className="w-[85%] mb-4 relative min-h-[120px] overflow-hidden">
          {personas.map((persona, index) => (
            <p
              key={`desc-${persona.id}`}
              className={`text-gray-200 leading-relaxed absolute inset-0 transition-all duration-1000 delay-300 transform ${
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
