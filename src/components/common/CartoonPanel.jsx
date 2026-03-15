import React from "react";
import { Card } from "../common/ui";

export default function CartoonPanel() {
  return (
    <Card>
      <div className="summary-card" style={{ minHeight: 420, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="muted" style={{ letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>
          Cartoon Feature Area
        </div>
        <div
          style={{
            marginTop: 18,
            minHeight: 280,
            borderRadius: 24,
            background: "linear-gradient(180deg, #f4ece2 0%, #d8ece8 100%)",
            border: "2px dashed #f28a3c",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: 24,
          }}
        >
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#2f6f67" }}>Your Cartoon Goes Here</div>
            <div style={{ marginTop: 10, color: "#6b8f88", lineHeight: 1.7 }}>
              I did not have your cartoon file in the project files available here,
              so I prepared this exact space for it on the homepage.
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
