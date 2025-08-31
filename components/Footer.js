import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Heart,
  ArrowUp,
  Code,
  Coffee,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/saintdannyyy",
      icon: <Github className="w-5 h-5" />,
      hoverColor: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saintdannyyy",
      icon: <Linkedin className="w-5 h-5" />,
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/saintdannyyy",
      icon: <Twitter className="w-5 h-5" />,
      hoverColor: "hover:text-sky-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "hello@saintdannyyy.dev",
      href: "mailto:hello@saintdannyyy.dev",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "San Francisco, CA",
      href: null,
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
      <div className="w-[90%] mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src="/saintdannyyy.jpg"
                  alt="Saintdannyyy"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold font-comic">
                <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
                  Saintdannyyy
                </span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-comic">
              Full-stack developer passionate about building innovative
              solutions that make a difference. Let's create something amazing
              together.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 rounded-lg text-gray-400 ${social.hoverColor} transition-all duration-300 hover:bg-gray-700 hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-[#662E9B]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#662E9B]" />
              Get in Touch
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <div className="text-[#EA3546]">{contact.icon}</div>
                  {contact.href ? (
                    <Link
                      href={contact.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {contact.text}
                    </Link>
                  ) : (
                    <span className="text-gray-400">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#662E9B]" />
              Let's Connect
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Interested in collaborating? Drop me a message and let's discuss
              your next project.
            </p>
            <Link
              href="mailto:hello@saintdannyyy.dev"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#EA3546] to-[#662E9B] rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} Saintdannyyy. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 text-sm"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-800/50">
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              Built with Next.js, Tailwind CSS, and deployed on Vercel.
              <Link
                href="https://github.com/saintdannyyy/portfolio"
                target="_blank"
                className="text-[#662E9B] hover:text-[#EA3546] transition-colors duration-300 ml-1"
              >
                View source code
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
