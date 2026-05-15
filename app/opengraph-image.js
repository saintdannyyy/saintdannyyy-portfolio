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

  const logoData = await fetch(`${baseUrl}/SaIntdannyyyOG.png`).then((r) =>
    r.arrayBuffer(),
  );
  const logoBase64 = `data:image/png;base64,${Buffer.from(logoData).toString("base64")}`;

  const interCss = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((r) => r.text());
  const interFontUrl = interCss.match(
    /src: url\((.+?)\) format\('truetype'\)/,
  )?.[1];
  const interFont = await fetch(interFontUrl).then((r) => r.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 80px",
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

      {/* TOP: Logo */}
      <img
        src={logoBase64}
        style={{
          height: "80px",
          width: "auto",
          objectFit: "cover",
          objectPosition: "left",
          opacity: 0.95,
          position: "relative",
        }}
      />

      {/* MIDDLE: Name */}
      <div
        style={{
          color: "#ffffff",
          fontSize: "72px",
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-2px",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        Daniel Ntiri Addo
      </div>

      {/* BOTTOM: Pills + terminal + URL */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
        }}
      >
        {/* Role tags */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Software Engineer", "Tech Creator", "Hackathon Junkie"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  color: "#93c5fd",
                  borderRadius: "999px",
                  padding: "10px 24px",
                  fontSize: "16px",
                  fontWeight: 500,
                  fontFamily: "monospace",
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>

        {/* Terminal line + URL row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "#4b5563",
              fontSize: "30px",
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "#3b82f6" }}> ❯_ </span>
            {/* <span>
              3+ years shipping full-stack products across healthcare, fintech,
              edtech & logistics
            </span> */}
          </div>
          <div
            style={{
              color: "#374151",
              fontSize: "14px",
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              flexShrink: 0,
              marginLeft: "40px",
            }}
          >
            saintdannyyy.dev
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interFont,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
