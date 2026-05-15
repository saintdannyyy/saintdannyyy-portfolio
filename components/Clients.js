"use client";

import Image from "next/image";

const clients = [
  { name: "Codlogics", logo: "/CSE.png" },
  { name: "Zest Ghana", logo: "/ZEST.jpg" },
  { name: "NPA Ghana", logo: "/NPA.png" },
  { name: "GEA", logo: "/GEA.png" },
  { name: "Inerca insurance", logo: "/inerca.jpg" },
  { name: "Quivertech Solutions", logo: "/quivertech.svg" },
  { name: "COSS", logo: "/coss.jpg" },
];

const ticker = [
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
  ...clients,
];

export default function Clients() {
  return (
    <section className="mt-3 sm:mt-0 py-3 w-full border-y border-white/[0.06] bg-blue-800/50 overflow-hidden">
      <p className="text-center text-gray-200 text-[15px] font-semibold font-mono uppercase tracking-[0.3em] mb-3">
        <span className="text-blue-400 select-none">{"<"}</span>
        my code runs at{" "}
        <span className="text-blue-400 select-none">{"/>"}</span>
      </p>
      <div className="overflow-hidden">
        <div className="flex items-center whitespace-nowrap animate-scroll-left">
          {ticker.map((client, i) => (
            <span key={i} className="inline-flex items-center shrink-0">
              <span className="inline-flex flex-col items-center gap-2.5 px-10 cursor-default group">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={60}
                    height={60}
                    className="object-contain w-12 h-12 opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                    <span className="text-white/30 text-lg font-bold font-comic">
                      {client.name[0]}
                    </span>
                  </div>
                )}
                <span className="text-blue-200/40 font-mono text-[11px] tracking-wide group-hover:text-blue-100/80 transition-colors duration-300">
                  {client.name}
                </span>
              </span>
              <span className="text-blue-400/20 text-xs select-none">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
