import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "../components/common/ui";
import DateRangeFields from "../components/common/DateRangeFields";
import PlatformMascot from "../components/common/PlatformMascot";
import BookingCostCalculator from "../components/common/BookingCostCalculator";
import { getRentalBySlug } from "../services/propertyService";
import { createBooking } from "../services/bookingService";
import { startStripeCheckout } from "../services/paymentService";
import logo from "../assets/logo.png";

export default function BookingPage() {
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    check_in: "",
    check_out: "",
    guests: 2,
    notes: ""
  });
  const [bookingResult, setBookingResult] = useState("");
  const [paymentResult, setPaymentResult] = useState("");
  const nights = useMemo(() => 4, []);

  useEffect(() => {
    getRentalBySlug(slug).then(setProperty);
  }, [slug]);

  if (!property) {
    return (
      <section className="section">
        <div className="container">Loading booking...</div>
      </section>
    );
  }

  const subtotal = property.rate * nights;
  const cleaning = property.cleaning_fee;
  const total = subtotal + cleaning;

  function updateField(event) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function handleCreateBooking() {
    const result = await createBooking({
      property_slug: property.slug,
      guest_name: `${form.first_name} ${form.last_name}`.trim(),
      guest_email: form.email,
      guest_phone: form.phone,
      check_in: form.check_in,
      check_out: form.check_out,
      guests: Number(form.guests),
      notes: form.notes,
      total_amount: total,
      status: "pending_payment"
    });

    setBookingResult(`Booking draft created: ${result.bookingId}`);
    const payment = await startStripeCheckout({ bookingId: result.bookingId, total });
    setPaymentResult(payment.message);
  }

  return (
    <section className="section">
      <div className="container two-col">
        <Card>
          <div className="summary-card">
            <div className="price-row" style={{ alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
              <img src={logo} alt="Playa Escondida Vacation Homes" style={{ height: 76, objectFit: "contain" }} />
              <PlatformMascot size="small" variant="card" caption="Reservation help" />
            </div>

            <div className="muted" style={{ letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 700, fontSize: 13, marginTop: "1rem" }}>
              Booking
            </div>
            <h1 style={{ marginTop: 12 }}>Complete your reservation</h1>
            <p className="muted">Choose your date range and guest count, then complete the guest information.</p>

            <div className="two-col" style={{ marginTop: 20 }}>
              <input name="first_name" value={form.first_name} onChange={updateField} placeholder="First name" />
              <input name="last_name" value={form.last_name} onChange={updateField} placeholder="Last name" />
              <input name="email" value={form.email} onChange={updateField} placeholder="Email" />
              <input name="phone" value={form.phone} onChange={updateField} placeholder="Phone" />

              <div style={{ gridColumn: "1 / -1" }}>
                <DateRangeFields
                  checkIn={form.check_in}
                  checkOut={form.check_out}
                  onCheckInChange={(value) => setForm((prev) => ({ ...prev, check_in: value }))}
                  onCheckOutChange={(value) => setForm((prev) => ({ ...prev, check_out: value }))}
                />
              </div>

              <input name="guests" value={form.guests} onChange={updateField} placeholder="Guests" />
              <input placeholder="Promo code" />
            </div>

            <textarea name="notes" value={form.notes} onChange={updateField} placeholder="Special requests" style={{ marginTop: 16 }} />

            <div className="header-actions" style={{ marginTop: 16 }}>
              <Link to={`/property/${property.slug}`}>
                <Button variant="light">Back to Property</Button>
              </Link>
              <Button onClick={handleCreateBooking}>Create Booking + Payment Step</Button>
            </div>

            {bookingResult ? <p style={{ marginTop: 16, fontWeight: 700 }}>{bookingResult}</p> : null}
            {paymentResult ? <p className="muted" style={{ marginTop: 8 }}>{paymentResult}</p> : null}

            <BookingCostCalculator
              nightlyRate={property.rate}
              cleaningFee={property.cleaning_fee}
              currency="$"
            />
          </div>
        </Card>

        <Card>
          <div className="summary-card">
            <h3>Reservation summary</h3>
            <div className="inline-actions" style={{ alignItems: "flex-start", marginTop: 18 }}>
              <img src={property.image} alt={property.name} style={{ width: 96, height: 96, borderRadius: 18, objectFit: "cover" }} />
              <div>
                <div style={{ fontWeight: 700 }}>{property.name}</div>
                <div className="muted" style={{ marginTop: 4 }}>{property.location}</div>
                <div className="muted" style={{ marginTop: 8 }}>{nights} nights • {property.guests} guests max</div>
              </div>
            </div>

            <div className="listing-info-grid" style={{ marginTop: "1rem" }}>
              <div className="listing-info-pill"><div className="label">Bedrooms</div><div className="value">{property.bedrooms}</div></div>
              <div className="listing-info-pill"><div className="label">Bathrooms</div><div className="value">{property.bathrooms}</div></div>
              <div className="listing-info-pill"><div className="label">Sq Ft</div><div className="value">{property.sqft}</div></div>
            </div>

            <div style={{ marginTop: 20 }}>
              <div className="price-row"><span className="muted">Accommodation</span><span style={{ fontWeight: 600 }}>${subtotal}</span></div>
              <div className="price-row" style={{ marginTop: 10 }}><span className="muted">Cleaning fee</span><span style={{ fontWeight: 600 }}>${cleaning}</span></div>
              <div className="price-row" style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #e2e8f0" }}>
                <span style={{ fontWeight: 700 }}>Total</span>
                <span style={{ fontWeight: 700, fontSize: 22 }}>${total}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
