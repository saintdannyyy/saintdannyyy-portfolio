import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Python", "PHP"],
  },
  {
    name: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    name: "Tools & Infra",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "Postman"],
  },
];

export const metadata = {
  title: "Stack | Daniel Addo",
  description: "The tech stack and tools Daniel Addo works with.",
};

export default function StackPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em]">
          stack.json
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-comic text-white mt-3 mb-4">
          Tools I work with.
        </h1>
        <p className="text-gray-500 max-w-xl mb-16">
          My primary toolkit — the things I reach for when building products.
        </p>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-5">
                {`// ${cat.name}`}
              </h2>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm font-mono bg-[#111] border border-white/[0.06] rounded-full text-gray-300 hover:border-blue-500/40 hover:text-blue-300 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
