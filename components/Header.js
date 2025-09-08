import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="flex items-start justify-self-start p-2">
        <div className="flex items-start gap-4">
          {/* Profile Picture */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white/20">
            <Image
              src="/hero.jpg"
              alt="Saintdannyyy"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-xl font-semibold text-white font-comic">
            <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
              Saintdannyyy
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
}
