import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex z-10 flex-col w-screen h-screen bg-black text-white">
      {/* Header Section*/}
      <div className="flex justify-center top-1 w-full bg-[#141301]">
        <Header className="z-10" />
      </div>
      {/* Main Body */}
      <div className="flex w-full justify-center">
        {/* Hero Section */}
        <Hero />
        {/* About Section */}
      </div>
    </div>
  );
}
