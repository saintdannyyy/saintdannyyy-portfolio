"use client";

const row1 = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "React Native",
  "Expo",
  "FastAPI",
];

const row2 = [
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Supabase",
  "Git",
  "GitHub",
  "Vercel",
  "Netlify",
  "Figma",
  "Postman",
  "Shadcn",
  "Framer Motion",
];

function Ticker({ items, direction = "left" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-3 whitespace-nowrap ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-block shrink-0 px-4 py-2 text-xs font-mono text-gray-400 border border-white/10 rounded-full hover:border-blue-500/40 hover:text-blue-300 transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-20 w-full" id="stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em]">
          03.stack.json
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold font-comic text-white mt-3">
          Tools I work with.
        </h2>
      </div>

      <div className="space-y-3">
        <Ticker items={row1} direction="left" />
        <Ticker items={row2} direction="right" />
      </div>
    </section>
  );
}
