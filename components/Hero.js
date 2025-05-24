import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex items-center justify-between w-[80%] mx-auto px-6 py-20 min-h-[80vh]">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl">
        <p className="text-gray-300 text-lg mb-4">Hey there, I'm</p>

        <p className="text-6xl md:text-7xl font-normal leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
            Daniel Addo
          </span>
        </p>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Software Engineer
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Building elegant, future-proof software that turns complex problems
            into seamless user experiences.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <Button
            variant="primary"
            className="relative px-4 py-4 bg-[#463357] font-medium rounded-full"
          >
            Let's Connect <ArrowUpRight />
          </Button>
          <Button
            variant="primary"
            className="group relative px-4 py-4 bg-[#EA354699] font-medium rounded-full hover:shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:via-purple-500 hover:to-red-500 hover:scale-105"
          >
            View Projects <ArrowUpRight />
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* Profile Image */}
        <Image
          src="/saintdannyyy.jpg"
          alt="Profile pic"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
