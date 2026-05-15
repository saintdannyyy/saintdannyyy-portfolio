import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const posts = [
  {
    slug: "building-with-ai",
    date: "Apr 2025",
    tag: "AI",
    title: "Building real products with AI in 2025",
    excerpt:
      "Notes from integrating LLMs into production apps — what actually works, what breaks silently, and what I'd do differently.",
  },
  {
    slug: "react-native-flaky-networks",
    date: "Mar 2025",
    tag: "Mobile",
    title: "Shipping React Native apps on flaky networks",
    excerpt:
      "Ghana's connectivity reality forces you to think about offline-first from day one. Here's the pattern that stuck.",
  },
  {
    slug: "nextjs-architecture-decisions",
    date: "Feb 2025",
    tag: "Architecture",
    title: "The Next.js decisions I keep second-guessing",
    excerpt:
      "App router, server components, caching — each one came with tradeoffs I didn't fully understand until much later.",
  },
  {
    slug: "postgres-for-everything",
    date: "Jan 2025",
    tag: "Database",
    title: "Why I keep reaching for PostgreSQL",
    excerpt:
      "Every project starts with 'should I use Mongo?' and ends with Postgres. Here's why I stopped fighting it.",
  },
];

export const metadata = {
  title: "Writing | Daniel Addo",
  description: "Technical articles and thoughts by Daniel Addo.",
};

export default function WritingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <span className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em]">
          writing/
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-comic text-white mt-3 mb-14">
          Things I've written.
        </h1>

        {/* Post list */}
        <div className="divide-y divide-white/[0.06]">
          {posts.map((post) => (
            <article key={post.slug} className="py-10 group">
              <Link href={`/writing/${post.slug}`} className="block">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-gray-500">
                    {post.date}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-mono rounded-full border border-blue-500/30 text-blue-400">
                    {post.tag}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-comic text-white group-hover:text-blue-400 transition-colors duration-200 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-500 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
