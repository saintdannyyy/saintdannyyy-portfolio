"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "index.tsx", href: "/" },
  { label: "projects/", href: "/projects" },
  { label: "experience.md", href: "/experience" },
  { label: "stack.json", href: "/stack" },
  { label: "writing/", href: "/writing" },
  { label: "contact.ts", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center justify-between gap-6 px-4 py-2 rounded-full bg-[#0f0f0f]/10 backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/40 w-full max-w-3xl">
        {/* Logo */}
        <Link href="/" className="shrink-10 -my-16 -mx-4">
          <Image
            src="/Saintdannyyy.png"
            alt="Daniel Addo"
            width={240}
            height={100}
            className="object-contain w-auto h-[70px] sm:h-[90px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-mono rounded-full transition-all duration-150 ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-500 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-500 hover:text-white transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-4 right-4 md:hidden rounded-2xl bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/40 py-3 px-2 space-y-0.5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm font-mono rounded-xl transition-all ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-gray-500 hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
