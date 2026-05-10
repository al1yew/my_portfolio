import { ImageResponse } from "next/og";
import { site } from "../data/portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f5f0",
          color: "#151515",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid #d6d6d6",
            borderRadius: 8,
            padding: 48,
            background: "#ffffff",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{site.name}</div>
            <div style={{ fontSize: 22, color: "#0f766e" }}>Kraków, Poland</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
              Senior React.js & .NET Full-Stack Software Engineer
            </div>
            <div style={{ maxWidth: 860, fontSize: 31, lineHeight: 1.35, color: "#454545" }}>
              Enterprise SaaS, digital platforms, microservices, workflow automation, mobile products, and production-grade delivery.
            </div>
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#2563eb" }}>
            <span>React.js</span>
            <span>Next.js</span>
            <span>.NET/C#</span>
            <span>React Native</span>
            <span>Microservices</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
