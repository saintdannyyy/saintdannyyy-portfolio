"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fx = (depth) => ({
    transform: `translate(${mouse.x * depth}px, ${mouse.y * depth}px)`,
    transition: "transform 0.12s ease-out",
  });

  return (
    <section className="relative flex flex-col justify-center min-h-screen w-full pt-14 overflow-hidden">
      {/* ── Scattered decorative elements ── */}

      {/* Large faint ring — top right */}
      <div
        style={fx(4)}
        className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full border border-white/[0.04]"
      />

      {/* Dot grid — upper right */}
      <div
        style={fx(10)}
        className="pointer-events-none absolute top-28 right-20 grid grid-cols-5 gap-[6px] opacity-[0.18]"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-[3px] h-[3px] rounded-full bg-white" />
        ))}
      </div>

      {/* `{` — far left, mid-height */}
      <div
        style={fx(18)}
        className="pointer-events-none select-none absolute top-[38%] left-6 font-mono text-[6rem] leading-none text-blue-400/[0.12]"
      >
        {"{"}
      </div>

      {/* `}` — lower right */}
      <div
        style={fx(12)}
        className="pointer-events-none select-none absolute bottom-28 right-10 font-mono text-[5rem] leading-none text-blue-400/[0.10]"
      >
        {"}"}
      </div>

      {/* `//` comment — bottom left */}
      <div
        style={fx(15)}
        className="pointer-events-none select-none absolute bottom-36 left-16 font-mono text-2xl text-white/[0.08] tracking-widest"
      >
        //
      </div>

      {/* Small rotated square — lower centre-left */}
      <div
        style={fx(22)}
        className="pointer-events-none absolute bottom-20 left-[22%] w-5 h-5 border border-blue-400/20 rotate-12"
      />

      {/* Medium circle ring — mid-left lower */}
      <div
        style={fx(8)}
        className="pointer-events-none absolute bottom-40 right-1/3 w-16 h-16 rounded-full border border-white/[0.07]"
      />

      {/* `</>` tag — top left area */}
      <div
        style={fx(20)}
        className="pointer-events-none select-none absolute top-36 left-[12%] font-mono text-sm text-blue-400/[0.18] tracking-widest"
      >
        {"</>"}
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-0">
          {/* Left: Text */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-8">
              // introduction
            </p>

            {/* Main Heading */}
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.92] font-comic text-white mb-8">
              Daniel
              <br />
              <span className="text-blue-400">Addo.</span>
            </h1>

            {/* Descriptor */}
            <p className="text-gray-400 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-comic">
              Software Engineer &amp; Creative Technologist — building
              full-stack products with AI integration. Ghana&#8209;based,
              global&#8209;minded.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-comic text-sm font-semibold rounded-full transition-colors duration-200"
              >
                Get in touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-white/40 hover:bg-white/5 text-white font-comic text-sm font-semibold rounded-full transition-all duration-200"
              >
                View projects →
              </Link>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="hidden lg:block shrink-0">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/hero.png"
                alt="Daniel Addo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
