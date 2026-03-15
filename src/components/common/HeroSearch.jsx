import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "./ui";

export default function HeroSearch() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    query: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
  });

  function updateField(event) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  function handleSearch() {
    const params = new URLSearchParams();
    if (form.query) params.set("q", form.query);
    if (form.checkIn) params.set("check_in", form.checkIn);
    if (form.checkOut) params.set("check_out", form.checkOut);
    if (form.guests) params.set("guests", String(form.guests));
    navigate(`/listings?${params.toString()}`);
  }

  return (
    <Card>
      <div className="summary-card">
        <div className="muted" style={{ letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 700, fontSize: 13 }}>
          Search Vacation Rentals
        </div>
        <h3 style={{ marginTop: 10, marginBottom: 16 }}>Find available listings by date and guests</h3>
        <div className="grid" style={{ gap: "1rem" }}>
          <div style={{ position: "relative" }}>
            <Search size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#6b8f88" }} />
            <input
              name="query"
              value={form.query}
              onChange={updateField}
              placeholder="Search by unit, view, or amenity"
              style={{ paddingLeft: 42 }}
            />
          </div>
          <div className="two-col" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <input type="date" name="checkIn" value={form.checkIn} onChange={updateField} />
            <input type="date" name="checkOut" value={form.checkOut} onChange={updateField} />
          </div>
          <div>
            <input type="number" min="1" name="guests" value={form.guests} onChange={updateField} placeholder="Guests" />
          </div>
          <Button onClick={handleSearch}>Search Rentals</Button>
        </div>
      </div>
    </Card>
  );
}
