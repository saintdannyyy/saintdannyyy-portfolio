import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Daniel Ntiri Addo | Software Engineer & Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const logoData = await fetch(`${baseUrl}/SaIntdannyyy.png`).then((r) =>
    r.arrayBuffer(),
  );
  const logoBase64 = `data:image/png;base64,${Buffer.from(logoData).toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "72px 80px",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid dots */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Blue glow top-right */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Blue glow bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          position: "relative",
        }}
      >
        {/* Logo */}
        <img
          src={logoBase64}
          style={{
            height: "90px",
            width: "auto",
            objectFit: "contain",
            marginBottom: "36px",
            opacity: 0.95,
          }}
        />

        {/* Role tags */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "40px" }}>
          {[
            "Software Engineer",
            "Full Stack Developer",
            "Hackathon Junkie",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.3)",
                color: "#93c5fd",
                borderRadius: "999px",
                padding: "8px 20px",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "monospace",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Terminal line */}
        <div
          style={{
            color: "#4b5563",
            fontSize: "15px",
            fontFamily: "monospace",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ color: "#3b82f6" }}>❯</span>
          <span>
            3+ years shipping full-stack products across healthcare, fintech,
            edtech & logistics
          </span>
        </div>
      </div>

      {/* Bottom-right: URL */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "80px",
          color: "#374151",
          fontSize: "14px",
          fontFamily: "monospace",
          letterSpacing: "0.1em",
        }}
      >
        saintdannyyy.dev
      </div>
    </div>,
    { ...size },
  );
}
