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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-7 h-7 rounded-full overflow-hidden ring-1 ring-white/10">
              <Image
                src="/hero.png"
                alt="Daniel Addo"
                width={28}
                height={28}
                className="object-cover"
              />
            </div>
            <span className="text-sm font-bold text-white font-comic tracking-tight">
              saintdannyyy
            </span>
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
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all duration-150 ${
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
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/[0.06] py-3 space-y-0.5">
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
                  className={`block px-3 py-2 text-sm font-mono rounded-md transition-all ${
                    isActive
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-500 hover:text-gray-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
