"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />

      {/* Navigation */}
      <div className="fixed top-20 left-6 z-50">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-black/50 backdrop-blur-md border-white/20 hover:bg-white/10 text-white"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </Button>
      </div>

      {/* Page Title */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40">
        <h1 className="text-2xl md:text-3xl font-bold text-center font-comic">
          <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h1>
      </div>

      {/* Main Content - Projects Component */}
      <div className="pt-32">
        <Projects />
      </div>
    </div>
  );
}
