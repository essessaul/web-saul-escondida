import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { Badge, Button, Card } from "../components/common/ui";
import DateRangeFields from "../components/common/DateRangeFields";
import PropertyAvailabilityCalendar from "../components/listings/PropertyAvailabilityCalendar";
import PlatformMascot from "../components/common/PlatformMascot";
import BookingCostCalculator from "../components/common/BookingCostCalculator";
import { getRentalBySlug } from "../services/propertyService";

export default function PropertyPage() {
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  useEffect(() => {
    getRentalBySlug(slug).then(setProperty);
  }, [slug]);

  if (!property) {
    return (
      <section className="section">
        <div className="container">Loading property...</div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="price-row" style={{ marginBottom: "1rem", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/listings" className="muted">← Back to vacation rentals</Link>
          <PlatformMascot size="medium" variant="card" caption="Beachfront host" />
        </div>

        <div className="two-col" style={{ marginTop: 24 }}>
          <Card>
            <div className="property-card">
              <img src={property.image} alt={property.name} style={{ height: 360 }} />
              <div className="meta-row" style={{ marginTop: 16 }}>
                <Badge>{property.category}</Badge>
                <Badge variant="outline">{property.status}</Badge>
                <span className="inline-actions muted"><Star size={16} /> {property.rating} guest rating</span>
              </div>

              <h1 style={{ marginTop: 16 }}>{property.name}</h1>
              <div className="inline-actions muted"><MapPin size={16} /> {property.location}</div>
              <p className="muted" style={{ lineHeight: 1.7 }}>{property.description}</p>

              <div className="listing-info-grid">
                <div className="listing-info-pill"><div className="label">Bedrooms</div><div className="value">{property.bedrooms}</div></div>
                <div className="listing-info-pill"><div className="label">Bathrooms</div><div className="value">{property.bathrooms}</div></div>
                <div className="listing-info-pill"><div className="label">Guests</div><div className="value">{property.guests}</div></div>
                <div className="listing-info-pill"><div className="label">Sq Meters</div><div className="value">{property.sqm}</div></div>
                <div className="listing-info-pill"><div className="label">Sq Feet</div><div className="value">{property.sqft}</div></div>
                <div className="listing-info-pill"><div className="label">Nightly Rate</div><div className="value">${property.rate}</div></div>
              </div>

              <PropertyAvailabilityCalendar
                title="Property Availability Calendar"
                nightlyRate={property.rate}
                cleaningFee={property.cleaning_fee}
                currency="$"
              />
            </div>
          </Card>

          <Card>
            <div className="summary-card">
              <h3>Reserve this property</h3>
              <p className="muted">Choose your date range and guest count before continuing to booking.</p>

              <div className="grid" style={{ marginTop: 20 }}>
                <DateRangeFields
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onCheckInChange={setCheckIn}
                  onCheckOutChange={setCheckOut}
                />
                <input value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="Guests" />
              </div>

              <div className="notice" style={{ marginTop: 16 }}>
                Range dates now work consistently across homepage search, listing pages, and booking.
              </div>

              <Link to={`/booking/${property.slug}`}>
                <Button style={{ width: "100%", marginTop: 16 }}>Continue to Booking</Button>
              </Link>

              <BookingCostCalculator
                nightlyRate={property.rate}
                cleaningFee={property.cleaning_fee}
                currency="$"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
