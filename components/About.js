import Image from "next/image";
import { ShineBorder } from "./magicui/shine-border";
import {
    ArrowUpRight,
  FileIcon,
  GithubIcon,
  Linkedin,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function About() {
  return (
    <div
      className="flex justify-between items-center w-[80%] mx-auto px-6 py-20 min-h-[80vh] bg-transparent space-x-10"
      id="about"
    >
      {/* left section */}
      <div className="flex min-w-[40%] justify-center items-center relative">
        {/* Background Container */}
        <div className="relative w-[300px] h-[350px] rounded-3xl flex items-center justify-center p-1 shadow-2xl">
          <ShineBorder
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderWidth={3}
            duration={12}
          />
          <div className="absolute pl-5 pt-5">
            <Image
              src="/saintdannyyy.jpg"
              alt="Profile pic"
              width={300}
              height={300}
              className="rounded-3xl object-cover"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div>
        <Separator className="my-2 w-12" />
        <h4>About Me</h4>
        <p className="text-6xl md:text-7xl font-semibold leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
            Daniel Addo
          </span>
        </p>
        <div className="flex space-x-3">
          <Link href="https://github.com/yourusername">
            <GithubIcon />
          </Link>
          <Link href="https://linkedin.com/in/yourusername">
            <Linkedin />
          </Link>
          <Link href="https://twitter.com/yourusername">
            <TwitterIcon />
          </Link>
          <Link href="https://youtube.com/yourusername">
            <YoutubeIcon />
          </Link>
        </div>
        <p className="w-[50%]">
          Hey there—thanks for stopping by! I’m a software engineer who lives
          for that “aha!” moment when code clicks and ideas come alive. Over the
          past 5+ years I’ve helped startups and established teams ship
          everything from lightning-fast single-page apps to data-driven backend
          services. My toolbox is equal parts JavaScript/TypeScript, React,
          Node, and Go, with a sprinkle of DevOps (Docker, Kubernetes, CI/CD) to
          keep things running smoothly.
        </p>
        <p className="mt-5">
          <Button
            variant="primary"
            className="relative px-4 py-4 bg-[#463357] font-medium rounded-full"
          >
            Download Resume <ArrowUpRight />
          </Button>
        </p>
      </div>
    </div>
  );
}
