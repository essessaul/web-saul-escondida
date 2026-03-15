import React, { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import PropertyCard from "../components/listings/PropertyCard";
import DateRangeFields from "../components/common/DateRangeFields";
import PlatformMascot from "../components/common/PlatformMascot";
import { getRentalListings } from "../services/propertyService";
import { isListingAvailable } from "../services/availabilityService";

export default function ListingsPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [checkIn, setCheckIn] = useState(searchParams.get("check_in") || "");
  const [checkOut, setCheckOut] = useState(searchParams.get("check_out") || "");
  const [guests, setGuests] = useState(searchParams.get("guests") || "");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getRentalListings().then(setProperties);
  }, []);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const textMatch = !query.trim()
        ? true
        : [p.name, p.category, p.location, ...(p.amenities || [])]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase());

      const guestsMatch = guests ? p.guests >= Number(guests) : true;
      const availabilityMatch = isListingAvailable(p, checkIn, checkOut);

      return textMatch && guestsMatch && availabilityMatch;
    });
  }, [query, properties, guests, checkIn, checkOut]);

  return (
    <section className="section">
      <div className="container">
        <div className="price-row" style={{ gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <div className="muted" style={{ letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 800, fontSize: 13 }}>
              Vacation Rentals
            </div>
            <h1 className="page-title" style={{ color: "#2f3d6b", marginBottom: ".5rem" }}>Browse available vacation rentals</h1>
            <div className="luxury-divider" />
            <p className="muted" style={{ maxWidth: 760, lineHeight: 1.8, marginTop: "1rem" }}>
              Filter by date range, guest count, and keywords. Results: {filtered.length}
            </p>
          </div>
          <PlatformMascot size="medium" variant="card" caption="Need help choosing?" />
        </div>

        <div className="card" style={{ padding: "1.2rem", marginBottom: "1.5rem" }}>
          <div className="grid" style={{ gap: "1rem" }}>
            <div style={{ position: "relative" }}>
              <Search size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#6b8f88" }} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search listings" style={{ paddingLeft: 42 }} />
            </div>
            <DateRangeFields
              checkIn={checkIn}
              checkOut={checkOut}
              onCheckInChange={setCheckIn}
              onCheckOutChange={setCheckOut}
            />
            <div>
              <input type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="Guests" />
            </div>
          </div>
        </div>

        <div className="module-grid">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} mode="rental" />
          ))}
        </div>
      </div>
    </section>
  );
}
