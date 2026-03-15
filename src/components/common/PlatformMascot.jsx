import React from "react";
import mascot from "../../assets/mascot-saul-playa.png";

export default function PlatformMascot({
  size = "small",
  align = "right",
  floating = false,
  variant = "plain",
  caption = "",
}) {
  const sizeMap = { small: 88, medium: 130, large: 240 };
  const width = sizeMap[size] || 88;

  const wrapperStyle = floating
    ? { position: "fixed", right: 16, bottom: 16, zIndex: 60 }
    : { display: "flex", justifyContent: align === "left" ? "flex-start" : align === "center" ? "center" : "flex-end" };

  const image = (
    <img
      src={mascot}
      alt="Saul Playa mascot"
      style={{
        width,
        maxWidth: "100%",
        height: "auto",
        filter: "drop-shadow(0 10px 22px rgba(47,61,107,.14))",
      }}
    />
  );

  if (variant === "card") {
    return (
      <div style={wrapperStyle}>
        <div className="mascot-card" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {image}
          <div>
            <div style={{ fontWeight: 800, color: "#2f3d6b" }}>Saul Playa</div>
            {caption ? <div className="muted" style={{ marginTop: 6, fontWeight: 700 }}>{caption}</div> : null}
          </div>
        </div>
      </div>
    );
  }

  return <div style={wrapperStyle}>{image}</div>;
}
