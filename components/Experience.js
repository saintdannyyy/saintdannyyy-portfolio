"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowUpRight, Camera } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Codlogics Software Engineering",
    position: "Software Engineer",
    location: "Accra, GH",
    startDate: "Sept 2023",
    endDate: "Present",
    duration: "3+ yrs",
    description:
      "Engineering, and shipping full-stack, IoT applications across multiple client and internal projects",
    highlights: [
      "Emissor, email marketing & automation platform",
      "J100 Coders coding sandbox, edtech platform teaching kids to code.",
      "SIDLog, biometric-enabled human security and identity management system.",
      "TMMLOG, digital tourism management system.",
      "IoT-integrated access control & attendance systems deployed across 3+ government-contracted clients.",
      "Collaborated in Agile sprints — planning, code reviews, debugging, and client communication throughout each delivery cycle.",
    ],
    technologies: [
      "React",
      "Next",
      "Node",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "Python",
      "CPP",
      "IoT",
    ],
    color: "blue",
  },
  {
    id: 2,
    company: "Zest Ghana",
    position: "Frontend Engineer",
    location: "Remote",
    startDate: "Apr 2024",
    endDate: "Sept 2025",
    duration: "1.5 yrs",
    description:
      "Owned the client side front end of a Point of Sale web app for small businesses across Africa — from architecture to shipping.",
    highlights: [
      "Architected the reusable component library and built responsive interfaces.",
      "Integrated REST APIs with the backend team.",
      "Collaborated with designer and product manager to ship product.",
    ],
    technologies: ["Next.js", "TailwindCSS", "Shadcn", "JavaScript", "Figma"],
    color: "violet",
  },
  {
    id: 3,
    company: "Trestle Academy Ghana",
    position: "Software Engineer Intern",
    location: "Remote",
    startDate: "May 2023",
    endDate: "Aug 2023",
    duration: "3 mos",
    description:
      "Gained hands-on experience in web and mobile development under mentorship, contributing to live client-facing projects.",
    highlights: [
      "Developed and iterated UI components in React and Flutter, receiving sign-off from senior engineers.",
      "Contributed to responsive layouts and mobile-first design patterns, gaining hands-on experience in cross-platform consistency.",
    ],
    technologies: ["HTML", "JavaScript", "React"],
    color: "emerald",
  },
];

const hackathons = [
  {
    id: 1,
    event: "Harvard Health Hackathon",
    year: "2026",
    placement: null,
    project: "MindLink",
    description:
      "Led the team to build MindLink, a private, AI-assisted mental health system that helps users track their wellbeing, detect early risk patterns, and connect to the right support. Designed to work even without internet access. This project got funding opportunities from the Harvard Innovation Labs.",
    image: "/hsil.jpg",
    color: "blue",
  },
  {
    id: 2,
    event: "Enactus Ghana National Competition",
    year: "2025",
    placement: "1st Runner-Up 🥈",
    project: "Project UpCrafts",
    description:
      'Served as Tech Lead for the University of Ghana Enactus team. Project UpCrafts transforms plastic waste into stylish, eco-friendly fashion bags. Placed 2nd Runner-Up at the national competition judged by KPMG Ghana under the theme "Entrepreneurship Without Borders".',
    image: "/enactus.jpg",
    color: "blue",
  },
  {
    id: 3,
    event: "UNICEF Innovation Challenge",
    year: "2025",
    placement: "2nd Runner-Up 🏆",
    project: "Wote",
    description:
      "Team Lead — built Wote, a bidirectional AI communication platform connecting deaf Ghanaians with the world through Ghanaian Sign Language. Real-time translation to English, Twi, and Ewe via a data-rich mobile app and Telegram bot — making classrooms and everyday interactions more inclusive.",
    image: "/unicef.jpg",
    color: "emerald",
  },
  {
    id: 4,
    event: "Tɛkyerɛma Pa Hackathon",
    year: "2025",
    placement: "2nd Runner-Up 🥈",
    project: "KasaYie",
    description:
      "Team Lead — built KasaYie, an AI-powered Akan speech recognition system supporting individuals with speech impairments. Competed at the grand finale held under the Tɛkyerɛma Pa Project — a UG × UCL partnership funded by UKAid's AT2030 programme, focused on developing inclusive Akan ASR models for native-language communication.",
    image: "/tekyeremapa.jpg",
    color: "amber",
  },
  {
    id: 5,
    event: "UN-Habitat Quality of Life Hackathon",
    year: "2025",
    placement: null,
    project: "Shelta",
    description:
      "Team Lead — built Shelta, a full-stack housing platform for Accra tackling urban affordability. Verified landlords, digitized rent payments (MoMo + bank), QoL neighbourhood scoring, maintenance routing to service providers, and rent advance loans. Powered by PWA for offline access.",
    image: "/unqol.jpg",
    color: "emerald",
  },
  {
    id: 6,
    event: "Global Challenge Lab",
    year: "2022",
    placement: null,
    project: null,
    description:
      "Selected for GCL22 — a high-intensity 14-day virtual hackathon powered by Imperial Enterprise Lab, Tsinghua University & TU Munich, and supported by Futurize. Collaborated with international students and experts to develop an entrepreneurial solution tackling a UN Sustainable Development Goal.",
    image: "/gcl.png",
    color: "violet",
  },
];

const leadership = [
  {
    id: 1,
    role: "Community Ambassador",
    org: "ALX Africa",
    period: "2026 – Present",
    description:
      "Representing ALX Ghana's  community, mentoring peers, championing tech education, and connecting engineers across Ghana.",
    image: "/alx.png",
    color: "blue",
  },

  {
    id: 3,
    role: "Tech Lead",
    org: "DLCF Legon",
    period: "2023 – Present",
    description:
      "In charge of the sound team at DLCF Legon — managing audio for weekly church services, campus programs, and national-scale events. Also provides technical support across the fellowship and trains team members on sound and tech operations.",
    image: null,
    color: "emerald",
  },
  {
    id: 4,
    role: "Tech Support",
    org: "Enactus UG",
    period: "2025",
    description:
      'Provided technical support for the University of Ghana Enactus team — Project UpCrafts, transforming plastic waste into eco-friendly fashion bags. The team placed 2nd Runner-Up at the 2025 Enactus Ghana National Competition judged by KPMG Ghana, under the theme "Entrepreneurship Without Borders".',
    image: null,
    color: "amber",
  },
  {
    id: 5,
    role: "Electoral Commissioner",
    org: "Computer Science Department, UG",
    period: "2025",
    description:
      "Led and oversaw the election of new departmental executives for the Computer Science Department at the University of Ghana. Managed the end-to-end electoral process while also serving as an executive of the department.",
    image: null,
    color: "blue",
  },
  {
    id: 6,
    role: "Electoral Commissioner",
    org: "Mensah Sarbah Hall, UG",
    period: "2025",
    description:
      "Led and oversaw the election of new hall executives at Mensah Sarbah Hall, University of Ghana. Managed the full electoral process and served as an executive of the hall.",
    image: null,
    color: "violet",
  },
];

const colorMap = {
  blue: {
    dot: "bg-blue-500",
    glow: "shadow-blue-500/40",
    badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    accent: "text-blue-400",
    line: "from-blue-500/60",
    bullet: "bg-blue-500/70",
  },
  violet: {
    dot: "bg-violet-500",
    glow: "shadow-violet-500/40",
    badge: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    accent: "text-violet-400",
    line: "from-violet-500/60",
    bullet: "bg-violet-500/70",
  },
  emerald: {
    dot: "bg-emerald-500",
    glow: "shadow-emerald-500/40",
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    accent: "text-emerald-400",
    line: "from-emerald-500/60",
    bullet: "bg-emerald-500/70",
  },
  amber: {
    dot: "bg-amber-500",
    glow: "shadow-amber-500/40",
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    accent: "text-amber-400",
    line: "from-amber-500/60",
    bullet: "bg-amber-500/70",
  },
};

function ImageSlot({ src, alt }) {
  if (src) {
    return (
      <div className="relative w-full h-50 rounded-xl overflow-hidden mb-4">
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      </div>
    );
  }
  return (
    <div className="w-full h-44 rounded-xl bg-white/[0.03] border border-dashed border-white/[0.08] flex flex-col items-center justify-center gap-2 mb-4">
      <Camera size={16} className="text-gray-700" />
      <span className="text-gray-700 text-xs font-mono">add photo</span>
    </div>
  );
}

function HackathonCard({ h, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const c = colorMap[h.color];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      className="flex flex-col rounded-2xl border border-white/[0.06] bg-[#111] p-5 hover:border-white/[0.14] transition-all duration-300 overflow-hidden relative"
    >
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${c.line} to-transparent`}
      />
      <ImageSlot src={h.image} alt={h.event} />
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="text-base font-bold font-comic text-white leading-snug">
          {h.event}
        </h3>
        {h.placement && (
          <span
            className={`shrink-0 px-2 py-0.5 text-xs font-mono rounded-full border ${c.badge}`}
          >
            {h.placement}
          </span>
        )}
      </div>
      {h.project && (
        <p className={`text-xs font-mono ${c.accent} mb-1`}>→ {h.project}</p>
      )}
      <p className="text-xs font-mono text-gray-600 mb-3">{h.year}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{h.description}</p>
    </div>
  );
}

function LeadershipCard({ l, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const c = colorMap[l.color];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
      className="flex flex-col rounded-2xl border border-white/[0.06] bg-[#111] p-5 hover:border-white/[0.14] transition-all duration-300 overflow-hidden relative"
    >
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${c.line} to-transparent`}
      />
      <ImageSlot src={l.image} alt={l.role} />
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="text-base font-bold font-comic text-white leading-snug">
          {l.role}
        </h3>
        <span
          className={`shrink-0 px-2 py-0.5 text-xs font-mono rounded-full border ${c.badge}`}
        >
          {l.period}
        </span>
      </div>
      <p className={`text-sm font-semibold font-mono ${c.accent} mb-3`}>
        {l.org}
      </p>
      <p className="text-gray-500 text-sm leading-relaxed">{l.description}</p>
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const c = colorMap[exp.color];
  const isRight = index % 2 === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
      className={`relative flex ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col items-start gap-0 group`}
    >
      {/* Spacer */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* Center dot */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 flex-col items-center z-10">
        <div
          className={`w-4 h-4 rounded-full ${c.dot} shadow-lg ${c.glow} group-hover:scale-150 transition-transform duration-300`}
        />
      </div>

      {/* Mobile dot + date */}
      <div className="lg:hidden flex items-center gap-3 mb-3">
        <div className={`w-3 h-3 rounded-full ${c.dot} shadow-md ${c.glow}`} />
        <span className="font-mono text-xs text-gray-600">
          {exp.startDate} – {exp.endDate}
        </span>
      </div>

      {/* Card */}
      <div className={`lg:w-1/2 ${isRight ? "lg:pr-14" : "lg:pl-14"} w-full`}>
        <div className="relative rounded-2xl border border-white/[0.06] bg-[#111] p-6 hover:border-white/[0.14] transition-all duration-300 overflow-hidden group/card">
          {/* Top glow strip */}
          <div
            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${c.line} to-transparent`}
          />

          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-1">
            <div>
              <p className="font-mono text-xs text-gray-600 mb-1 hidden lg:block">
                {exp.startDate} – {exp.endDate} · {exp.duration}
              </p>
              <h3 className="text-xl font-bold font-comic text-white leading-snug">
                {exp.position}
              </h3>
              <p
                className={`text-sm font-semibold font-mono ${c.accent} mt-0.5`}
              >
                {exp.company}
              </p>
            </div>
            <span
              className={`shrink-0 mt-1 px-2.5 py-1 text-xs font-mono rounded-full border ${c.badge}`}
            >
              {exp.duration}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-gray-600 text-xs font-mono mt-2 mb-4">
            <MapPin size={11} />
            {exp.location}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Highlights / bullets */}
          {exp.highlights?.length > 0 && (
            <ul className="space-y-2 mb-5">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-gray-500"
                >
                  <span
                    className={`mt-[6px] w-1.5 h-1.5 rounded-full shrink-0 ${c.bullet}`}
                  />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs font-mono bg-white/5 border border-white/[0.08] rounded-full text-gray-500 hover:text-gray-300 hover:border-white/20 transition-colors duration-200"
              >
                {t}
              </span>
            ))}
          </div>

          <ArrowUpRight
            size={16}
            className="absolute bottom-4 right-4 text-white/10 group-hover/card:text-white/30 transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const lineRef = useRef(null);
  const [lineH, setLineH] = useState(0);
  const [activeTab, setActiveTab] = useState("Work");

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineH(100);
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="w-full py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-2 block">
          02.experience.md
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-2xl sm:text-5xl font-bold font-comic text-white">
              The journey so far.
            </h2>
            <p className="text-gray-600 font-mono text-xs mt-2">
              work · hackathons · leadership
            </p>
          </div>
          <div className="flex gap-1 p-1 bg-white/[0.04] border border-white/[0.06] rounded-xl w-fit">
            {["Work", "Hackathons", "Leadership"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-mono rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "Work" && (
          <div ref={lineRef} className="relative">
            {/* Animated center line */}
            <div
              className="hidden lg:block absolute left-1/2 -translate-x-px top-0 w-px bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent origin-top transition-all duration-1000 ease-out"
              style={{ height: `${lineH}%` }}
            />
            {/* Mobile left line */}
            <div className="lg:hidden absolute left-1.5 top-0 bottom-0 w-px bg-white/[0.06]" />
            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.id} exp={exp} index={i} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "Hackathons" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hackathons.map((h, i) => (
              <HackathonCard key={h.id} h={h} index={i} />
            ))}
          </div>
        )}

        {activeTab === "Leadership" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {leadership.map((l, i) => (
              <LeadershipCard key={l.id} l={l} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
