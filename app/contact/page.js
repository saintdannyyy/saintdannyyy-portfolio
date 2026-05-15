"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Instagram,
} from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@saintdannyyy",
    href: "https://github.com/saintdannyyy",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Daniel Addo",
    href: "https://www.linkedin.com/in/saintdannyyy",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@saintdannyyy",
    href: "https://instagram.com/saintdannyyy",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@saintdannyyy",
    href: "https://x.com/saintdannyyy",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "danieltesla746@gmail.com",
    href: "mailto:danieltesla746@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em]">
          contact.ts
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-comic text-white mt-3 mb-4">
          Let's talk.
        </h1>
        <p className="text-gray-500 max-w-xl mb-16">
          I'm open to new opportunities, collaborations, or just a good
          conversation. Reach me through any of these channels.
        </p>

        {/* Links */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {links.map(({ icon: Icon, label, handle, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              className="flex items-center justify-between gap-4 p-5 bg-[#111] border border-white/[0.06] rounded-xl hover:border-blue-500/30 hover:bg-white/[0.02] transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium font-comic">
                    {label}
                  </p>
                  <p className="text-xs font-mono text-gray-500">{handle}</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-gray-600 group-hover:text-blue-400 transition-colors"
              />
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
