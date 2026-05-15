"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const socials = [
  {
    name: "GitHub",
    handle: "@saintdannyyy",
    href: "https://github.com/saintdannyyy",
    icon: Github,
    desc: "peep the code",
  },
  {
    name: "LinkedIn",
    handle: "Daniel Ntiri Addo",
    href: "https://www.linkedin.com/in/saintdannyyy/",
    icon: Linkedin,
    desc: "let's connect professionally",
  },
  {
    name: "Twitter / X",
    handle: "@saintdannyyy",
    href: "https://twitter.com/saintdannyyy",
    icon: Twitter,
    desc: "catch me tweeting random thoughts",
  },
  {
    name: "Instagram",
    handle: "@saintdannyyy",
    href: "https://instagram.com/saintdannyyy",
    icon: Instagram,
    desc: "behind the lens & the screen",
  },
  {
    name: "Email",
    handle: "danieltesla746@gmail.com",
    href: "mailto:danieltesla746@gmail.com",
    icon: Mail,
    desc: "slide into my inbox",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-2 block">
          04.contact.ts
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold font-comic text-white mb-4">
              Let&apos;s build something{" "}
              <span className="text-blue-400">dope.</span>
            </h2>
            <div className="font-mono text-sm max-w-md space-y-1.5">
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-400">got a project idea?</span>
              </p>
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-400">a collab in mind?</span>
              </p>
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-400">a hackathon?</span>
              </p>
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-400">or just want to say hey?</span>
              </p>
              <p>
                <span className="text-blue-400 select-none">❯ </span>
                <span className="text-gray-500">
                  i&apos;m always down to chat.
                  <span className="text-blue-400 animate-pulse"> _</span>
                </span>
              </p>
            </div>
          </div>

          {/* Big email CTA */}
          <Link
            href="mailto:danieltesla746@gmail.com"
            className="group shrink-0 inline-flex items-center gap-3 px-4 py-4 bg-blue-800 hover:bg-blue-500 text-white font-comic font-bold text-base rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <MessageCircle size={18} />
            Say hi 👋
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Socials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {socials.map(({ name, handle, href, icon: Icon, desc }) => (
            <Link
              key={name}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 p-5 rounded-2xl border border-white/[0.06] bg-[#111] hover:border-blue-500/30 hover:bg-[#141414] transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.06] group-hover:border-blue-500/20 transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                  />
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-gray-700 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>

              <div>
                <p className="text-white font-bold font-comic text-sm mb-0.5">
                  {name}
                </p>
                <p className="text-gray-600 font-mono text-xs mb-2">{handle}</p>
                <p className="text-gray-500 text-xs">{desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-12 text-center text-gray-700 font-mono text-xs">
          I usually respond within 24 hrs — faster if the vibe is right ✌️
        </p>
      </div>
    </section>
  );
}
