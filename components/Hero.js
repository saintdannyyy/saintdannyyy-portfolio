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
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14">
          {/* Left: Text */}
          <div className="flex flex-col max-w-2xl">
            {/* Intro line */}
            <p className="text-gray-500 text-lg font-mono mb-4 tracking-wide">
              Hey there, I&apos;m
            </p>

            {/* Name */}
            <h1 className="text-[clamp(3rem,9vw,6rem)] font-bold leading-[0.9] font-comic text-white mb-0">
              Daniel Addo
            </h1>

            {/* Decorative underline */}
            <div className="mb-4">
              <svg
                viewBox="0 0 320 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-64 sm:w-80 lg:w-96 h-3"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C40 2, 80 11, 120 6 C160 1, 200 10, 240 5 C270 2, 295 9, 318 5"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                  className="animate-draw-underline"
                />
                <path
                  d="M2 8 C40 2, 80 11, 120 6 C160 1, 200 10, 240 5 C270 2, 295 9, 318 5"
                  stroke="#93C5FD"
                  strokeWidth="1"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.3"
                  className="animate-draw-underline-delay"
                />
              </svg>
            </div>
            <p className="text-blue-700 text-md sm:text-2xl font-comic font-semibold mb-6">
              Software Engineer | Hackathon Junkie | Retired Gymrat
            </p>

            {/* Description */}
            <div className="text-sm sm:text-base max-w-lg mb-10 font-mono space-y-1.5">
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-400">
                  3+ years shipping full-stack, real world products across
                  healthcare, fintech, edtech, insurtech & logistics
                </span>
              </p>
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-500">Web,Mobile, AI.</span>
              </p>
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-400">
                  If it solves a real problem and ships clean, I&apos;m all in.
                </span>
              </p>
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-400">
                  Can often be found at hackathons, tech events, or on Twitter
                  ranting about tech.
                </span>
              </p>
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-400">
                  Tech gadgets excite me, but I promise I won&apos;t talk about
                  them much.
                </span>
              </p>
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-400">
                  Choosing SAMSUNG over Apple is a hill I will die on.
                </span>
                <span className="text-blue-400 animate-pulse"> _</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 hover:bg-blue-500 text-white font-comic text-sm font-semibold rounded-full transition-colors duration-200"
              >
                Let&apos;s Connect 👋
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-white/40 hover:bg-white/5 text-white font-comic text-sm font-semibold rounded-full transition-all duration-200"
              >
                See what I&apos;ve built
              </Link>
            </div>
          </div>

          {/* Right: Profile image */}
          <div className="shrink-0 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-80 sm:h-[420px] lg:w-[360px] lg:h-[480px] rounded-3xl">
              {/* Corner accent lines */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-blue-500/40 rounded-tr-2xl pointer-events-none z-10" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-blue-500/40 rounded-bl-2xl pointer-events-none z-10" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Daniel Addo"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
