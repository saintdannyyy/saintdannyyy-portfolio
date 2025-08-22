import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="flex items-center justify-center p-4">
        <div className="flex items-center gap-4">
          {/* Profile Picture */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
            <Image
              src="/saintdannyyy.jpg"
              alt="Saintdannyyy"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-xl font-semibold text-white">
            <span className="bg-gradient-to-r from-[#EA3546] via-[#662E9B] to-[#F86624] bg-clip-text text-transparent">
              Saintdannyyy
            </span>
          </h1>
        </div>
      </div>
    </header>
  );
}
