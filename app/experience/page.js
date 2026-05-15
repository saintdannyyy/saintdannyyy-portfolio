import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export const metadata = {
  title: "Experience | saintdannyyy",
  description: "Where I have worked and what I built.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main className="pt-24">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
