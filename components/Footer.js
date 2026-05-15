"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/saintdannyyy", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-ntiri-addo/",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/saintdannyyy", icon: Twitter },
  { name: "Email", href: "mailto:danieltesla746@gmail.com", icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand + tagline */}
          <div>
            <p className="text-white font-bold font-comic text-lg mb-1">
              Daniel Addo
            </p>
            <p className="text-gray-500 text-sm font-mono">
              © {year} · compiled with &lt;3 in Accra
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={name}
                className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
              >
                <Icon size={18} />
              </Link>
            ))}

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="text-gray-500 hover:text-white transition-colors duration-200 ml-2"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
