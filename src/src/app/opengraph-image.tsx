import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Coastal Solar Co. – Solar Panels Wollongong & South Coast NSW";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a3a5c",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "#E8A020",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 900,
              fontSize: "20px",
            }}
          >
            CS
          </div>
          <span style={{ color: "white", fontWeight: 700, fontSize: "22px" }}>
            Coastal Solar Co.
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                backgroundColor: "#E8A020",
                color: "white",
                fontWeight: 700,
                fontSize: "16px",
                padding: "6px 16px",
                borderRadius: "100px",
              }}
            >
              CEC Accredited · Wollongong &amp; South Coast NSW
            </div>
          </div>
          <div
            style={{
              color: "white",
              fontSize: "58px",
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Solar Panels Wollongong &amp; South Coast NSW
          </div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "26px", maxWidth: "800px" }}>
            Honest pricing · 5-min callback · 10-year warranty · Call 0493 531 857
          </div>
        </div>

        {/* Bottom trust bar */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "24px",
          }}
        >
          {["⭐ 200+ Five-Star Reviews", "⚡ Install in 6 Days", "🛡️ 10-Year Warranty", "💰 From $5,500"].map(
            (item) => (
              <div key={item} style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px", fontWeight: 600 }}>
                {item}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
