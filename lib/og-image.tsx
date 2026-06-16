import { ImageResponse } from "next/og";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export function createOgImage({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          background: "#080808",
          color: "#e2e2e2",
          fontFamily: "ui-monospace, monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            color: "#3ecf8e",
          }}
        >
          <span>{">_"}</span>
          <span style={{ color: "#e2e2e2", marginLeft: 12 }}>Zach</span>
          <span style={{ color: "#3ecf8e" }}>Tech</span>
          <span style={{ color: "#3ecf8e" }}>_</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#8a8a8a",
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#8a8a8a" }}>zachtech.dev</div>
      </div>
    ),
    ogImageSize
  );
}
