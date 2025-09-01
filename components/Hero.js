"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight, Sparkles, Code, Zap } from "lucide-react";
import { Highlighter } from "./magicui/highlighter";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-gradient-to-r from-[#EA3546] to-[#F86624] rounded-full opacity-20 animate-bounce"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 mt-32 lg:mt-0 min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles */}
        {particles}

        {/* Interactive Glow */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#EA3546]/10 via-[#662E9B]/10 to-[#F86624]/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#EA3546]/20 to-[#662E9B]/20 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-[#662E9B]/20 to-[#F86624]/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-[#F86624]/20 to-[#EA3546]/20 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Left Content */}
      <div
        className={`flex-1 w-full lg:max-w-2xl relative z-10 text-center lg:text-left transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Greeting with Icon */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA3546] animate-pulse" />
          <p className="text-gray-300 text-base sm:text-lg">Hey there, I'm</p>
        </div>

        {/* Animated Name */}
        <div className="relative mb-6">
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
              Daniel Addo
            </span>
          </p>
          {/* Magical sparkles around name */}
          <div className="absolute -top-2 -right-2 w-3 h-3">
            <Zap className="w-3 h-3 text-[#F86624] animate-ping" />
          </div>
          <div className="absolute top-1/2 -left-4 w-2 h-2">
            <div className="w-2 h-2 bg-[#EA3546] rounded-full animate-pulse" />
          </div>
        </div>

        <div
          className={`mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-6 h-6 text-[#662E9B]" />
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              <Highlighter
                action="underline"
                color="#662E9B"
                stroke={2}
                animationDuration={5000}
                strokeWidth={3}
              >
                Software Engineer
              </Highlighter>
            </h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            I'm passionate about building innovative platforms that solve
            real-world problems, with expertise spanning AI, full-stack
            development, and product building.✨
          </p>
        </div>

        {/* Enhanced Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Button
            variant="primary"
            className="group relative px-6 py-4 bg-gradient-to-r from-[#463357] to-[#662E9B] font-medium rounded-full hover:shadow-2xl hover:shadow-[#463357]/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Connect{" "}
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#662E9B] to-[#463357] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <Button
            variant="primary"
            className="group relative px-6 py-4 bg-gradient-to-r from-[#EA3546] to-[#F86624] font-medium rounded-full hover:shadow-2xl hover:shadow-[#EA3546]/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects{" "}
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F86624] to-[#EA3546] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>

      {/* Magical Profile Image - Only visible on md+ screens */}
      <div
        className={`hidden md:flex md:flex-1 justify-center items-center relative transition-all duration-1000 delay-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="relative group">
          {/* Rotating Ring */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500 animate-spin" />

          {/* Pulsing Glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#EA3546]/30 via-[#662E9B]/30 to-[#F86624]/30 blur-lg animate-pulse" />

          {/* Image Container */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] p-1 group-hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full bg-black rounded-full p-2">
              <Image
                src="/saintdannyyy.jpg"
                alt="Profile pic"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Floating Icons */}
          <div
            className="absolute top-4 right-4 animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#EA3546]" />
          </div>
          <div
            className="absolute bottom-8 left-4 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#F86624]" />
          </div>
          <div
            className="absolute top-1/2 left-0 animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#662E9B]" />
          </div>
        </div>
      </div>
    </div>
  );
}
