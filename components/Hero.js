"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="container w-[80%] mx-auto px-4 py-16 lg:py-24 min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <p className="text-gray-300 text-lg">Hey there, I'm</p>

          <p className="text-6xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight">
            <span className="bg-gradient-to-r from-red-500 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Daniel Addo
            </span>
          </p>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
              Software Engineer
            </h2>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-md">
              Building elegant, future-proof software that turns complex
              problems into seamless user experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              Let's Connect
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <button className="px-6 py-3 border border-red-500 text-red-500 rounded-lg font-medium transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              View Projects
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-600 to-orange-500 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-red-500 via-purple-600 to-orange-500 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/saintdannyyy.jpg"
                alt="Daniel Addo - Software Engineer"
                width={280}
                height={280}
                className="object-cover rounded-full scale-90"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
