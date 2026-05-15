import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <TechStack />
      <Footer />
    </div>
  );
}
