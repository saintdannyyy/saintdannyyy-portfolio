import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "180px",
        height: "180px",
        background: "#0a0a0a",
        borderRadius: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "3px solid rgba(59,130,246,0.4)",
      }}
    >
      <span
        style={{
          color: "#3b82f6",
          fontSize: "100px",
          fontWeight: 800,
          fontFamily: "sans-serif",
          lineHeight: 1,
          letterSpacing: "-4px",
        }}
      >
        D
      </span>
    </div>,
    { ...size },
  );
}
