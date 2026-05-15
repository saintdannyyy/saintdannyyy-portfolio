import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    label: "Frontend",
    color: "blue",
    description: "What users see and interact with.",
    tools: [
      { name: "TypeScript", note: "preferred" },
      { name: "JavaScript", note: "daily" },
      { name: "React", note: "daily" },
      { name: "Next.js", note: "preferred" },
      { name: "Tailwind CSS", note: "daily" },
      { name: "Framer Motion", note: "animations" },
      { name: "Shadcn/ui", note: "components" },
    ],
  },
  {
    label: "Backend",
    color: "violet",
    description: "APIs, business logic, and server-side systems.",
    tools: [
      { name: "Node.js", note: "primary" },
      { name: "Express.js", note: "daily" },
      { name: "Python", note: "scripting + AI" },
      { name: "FastAPI", note: "async APIs" },
      { name: "REST APIs", note: "daily" },
      { name: "WebSockets", note: "real-time" },
    ],
  },
  {
    label: "Mobile",
    color: "emerald",
    description: "Cross-platform native-feel apps.",
    tools: [
      { name: "React Native", note: "primary" },
      { name: "Expo", note: "daily" },
      { name: "PWA", note: "offline-capable" },
    ],
  },
  {
    label: "Database",
    color: "amber",
    description: "Storing, querying, and scaling data.",
    tools: [
      { name: "PostgreSQL", note: "relational" },
      { name: "MySQL", note: "relational" },
      { name: "MongoDB", note: "NoSQL" },
      { name: "Supabase", note: "BaaS" },
    ],
  },
  {
    label: "Tools & DevOps",
    color: "rose",
    description: "Shipping, collaborating, and iterating fast.",
    tools: [
      { name: "Git", note: "daily" },
      { name: "GitHub", note: "daily" },
      { name: "Vercel", note: "preferred deploy" },
      { name: "Netlify", note: "static sites" },
      { name: "Postman", note: "API testing" },
    ],
  },
  {
    label: "Design",
    color: "pink",
    description: "From wireframe to pixel-perfect.",
    tools: [{ name: "Figma", note: "UI/UX design" }],
  },
];

const exploring = [
  "Docker",
  "Redis",
  "GraphQL",
  "tRPC",
  "LangChain",
  "Prisma",
  "Kubernetes",
];

const colorMap = {
  blue: {
    border: "border-blue-500/20 hover:border-blue-500/40",
    labelBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    pill: "border-blue-500/20 text-blue-300 bg-blue-500/5 hover:bg-blue-500/15",
    dot: "bg-blue-500",
  },
  violet: {
    border: "border-violet-500/20 hover:border-violet-500/40",
    labelBg: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    pill: "border-violet-500/20 text-violet-300 bg-violet-500/5 hover:bg-violet-500/15",
    dot: "bg-violet-500",
  },
  emerald: {
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    labelBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    pill: "border-emerald-500/20 text-emerald-300 bg-emerald-500/5 hover:bg-emerald-500/15",
    dot: "bg-emerald-500",
  },
  amber: {
    border: "border-amber-500/20 hover:border-amber-500/40",
    labelBg: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    pill: "border-amber-500/20 text-amber-300 bg-amber-500/5 hover:bg-amber-500/15",
    dot: "bg-amber-500",
  },
  rose: {
    border: "border-rose-500/20 hover:border-rose-500/40",
    labelBg: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    pill: "border-rose-500/20 text-rose-300 bg-rose-500/5 hover:bg-rose-500/15",
    dot: "bg-rose-500",
  },
  pink: {
    border: "border-pink-500/20 hover:border-pink-500/40",
    labelBg: "bg-pink-500/10 border-pink-500/20 text-pink-400",
    pill: "border-pink-500/20 text-pink-300 bg-pink-500/5 hover:bg-pink-500/15",
    dot: "bg-pink-500",
  },
};

export const metadata = {
  title: "Stack | Daniel Ntiri Addo",
  description:
    "The languages, frameworks, and platforms Daniel Ntiri Addo (saintdannyyy) uses to build web apps, mobile apps, APIs, and AI systems.",
};

export default function StackPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-600 hover:text-blue-400 transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          back to home
        </Link>

        {/* Page heading */}
        <div className="mb-16">
          <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-3 block">
            stack.json
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold font-comic text-white mb-4">
            Tools I work with.
          </h1>
          <p className="text-gray-500 text-base max-w-xl font-comic leading-relaxed">
            The languages, frameworks, and platforms I reach for when building
            products — from idea to deployment.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.label}
                className={`bg-[#111] border ${c.border} rounded-2xl p-6 transition-all duration-300`}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                  <span
                    className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${c.labelBg}`}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm font-comic mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((t) => (
                    <span
                      key={t.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono transition-colors duration-200 ${c.pill}`}
                    >
                      {t.name}
                      <span className="text-[10px] opacity-40">{t.note}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently exploring */}
        <div className="border border-white/[0.07] rounded-2xl p-8 bg-[#111] mb-12">
          <div className="mb-6">
            <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-2 block">
              currently exploring
            </span>
            <p className="text-gray-500 text-sm font-comic">
              Things I&apos;m actively learning or experimenting with.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {exploring.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs font-mono text-gray-400 border border-white/10 rounded-full hover:border-blue-500/30 hover:text-blue-300 transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Terminal footer */}
        <div className="font-mono text-sm space-y-1.5">
          <p className="text-gray-600">
            <span className="text-blue-400">❯</span> philosophy: pick the right
            tool for the job, not the trendy one.
          </p>
          <p className="text-gray-600">
            <span className="text-blue-400">❯</span> always open to picking up
            new tech when a project demands it.
          </p>
          <p className="text-gray-700">
            <span className="text-blue-400">❯</span>{" "}
            <span className="animate-pulse">▌</span>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
