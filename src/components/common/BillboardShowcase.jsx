import React from "react";
import { Card } from "./ui";
import logo from "../../assets/logo.png";

export default function BillboardShowcase() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Card>
          <div
            style={{
              position: "relative",
              minHeight: 360,
              borderRadius: 24,
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(rgba(255,253,249,.15), rgba(255,253,249,.2)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
              padding: 24,
            }}
          >
            <div
              style={{
                width: "min(980px, 96%)",
                background: "rgba(255,255,255,.92)",
                borderRadius: 24,
                border: "1px solid #e6d8cb",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 18px 36px rgba(47,111,103,.12)",
              }}
            >
              <img
                src={logo}
                alt="Playa Escondida Vacation Homes"
                style={{ height: 86, objectFit: "contain", margin: "0 auto 1rem auto" }}
              />
              <div className="muted" style={{ letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>
                Widescreen Billboard Showcase
              </div>
              <h2 style={{ fontSize: "2rem", margin: ".6rem 0 1rem 0" }}>
                Beachfront stays and ownership at Playa Escondida
              </h2>
              <p style={{ maxWidth: 820, margin: "0 auto", lineHeight: 1.8, color: "#4f7d76" }}>
                This centered widescreen section was added as a beach billboard-style visual for the homepage.
                I did not have the exact previous billboard file available here, so I rebuilt the section as a
                full-width beach showcase in the middle of the homepage.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
