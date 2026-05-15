import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "32px",
        height: "32px",
        background: "#0a0a0a",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(59,130,246,0.4)",
      }}
    >
      <span
        style={{
          color: "#3b82f6",
          fontSize: "18px",
          fontWeight: 800,
          fontFamily: "sans-serif",
          lineHeight: 1,
          letterSpacing: "-1px",
        }}
      >
        D
      </span>
    </div>,
    { ...size },
  );
}
