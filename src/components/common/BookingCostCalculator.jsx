import React, { useMemo, useState } from "react";

function nightsBetween(start, end) {
  if (!start || !end) return 0;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diff = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

export default function BookingCostCalculator({
  nightlyRate = 0,
  cleaningFee = 0,
  currency = "$",
}) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [includeInsurance, setIncludeInsurance] = useState(false);
  const [includeCleaning, setIncludeCleaning] = useState(true);
  const [includeAirportTransfer, setIncludeAirportTransfer] = useState(false);
  const [includeWelcomePack, setIncludeWelcomePack] = useState(false);

  const insuranceFee = 39;
  const transferFee = 65;
  const welcomePackFee = 45;

  const nights = useMemo(() => nightsBetween(checkIn, checkOut), [checkIn, checkOut]);
  const accommodation = nights * Number(nightlyRate || 0);

  const selectedItems = useMemo(() => {
    const items = [];
    if (includeCleaning) items.push({ label: "Cleaning fee", amount: Number(cleaningFee || 0) });
    if (includeInsurance) items.push({ label: "Damage protection insurance", amount: insuranceFee });
    if (includeAirportTransfer) items.push({ label: "Airport transfer", amount: transferFee });
    if (includeWelcomePack) items.push({ label: "Welcome pack", amount: welcomePackFee });
    return items;
  }, [includeCleaning, includeInsurance, includeAirportTransfer, includeWelcomePack, cleaningFee]);

  const extrasTotal = selectedItems.reduce((sum, item) => sum + item.amount, 0);
  const total = accommodation + extrasTotal;

  return (
    <div className="card" style={{ padding: "1.2rem", marginTop: "1.25rem" }}>
      <div className="muted" style={{ letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 800, fontSize: 13 }}>
        Booking Cost Calculator
      </div>
      <h3 style={{ marginTop: 10 }}>Choose dates and optional items</h3>

      <div className="grid" style={{ gap: "1rem", marginTop: "1rem" }}>
        <div className="two-col" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <div className="muted" style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Check-in</div>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </div>
          <div>
            <div className="muted" style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Check-out</div>
            <input type="date" value={checkOut} min={checkIn || undefined} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
        </div>

        <div className="option-list">
          <label className="option-row">
            <input type="checkbox" checked={includeCleaning} onChange={(e) => setIncludeCleaning(e.target.checked)} />
            <span>Cleaning fee</span>
            {includeCleaning ? <strong>{currency}{cleaningFee}</strong> : null}
          </label>

          <label className="option-row">
            <input type="checkbox" checked={includeInsurance} onChange={(e) => setIncludeInsurance(e.target.checked)} />
            <span>Damage protection insurance</span>
            {includeInsurance ? <strong>{currency}{insuranceFee}</strong> : null}
          </label>

          <label className="option-row">
            <input type="checkbox" checked={includeAirportTransfer} onChange={(e) => setIncludeAirportTransfer(e.target.checked)} />
            <span>Airport transfer</span>
            {includeAirportTransfer ? <strong>{currency}{transferFee}</strong> : null}
          </label>

          <label className="option-row">
            <input type="checkbox" checked={includeWelcomePack} onChange={(e) => setIncludeWelcomePack(e.target.checked)} />
            <span>Welcome pack</span>
            {includeWelcomePack ? <strong>{currency}{welcomePackFee}</strong> : null}
          </label>
        </div>

        <div className="booking-summary-box">
          <div className="price-row">
            <span className="muted">Nightly rate</span>
            <strong>{currency}{nightlyRate}</strong>
          </div>
          <div className="price-row" style={{ marginTop: 8 }}>
            <span className="muted">Nights</span>
            <strong>{nights}</strong>
          </div>
          <div className="price-row" style={{ marginTop: 8 }}>
            <span className="muted">Accommodation</span>
            <strong>{currency}{accommodation}</strong>
          </div>

          {selectedItems.map((item) => (
            <div className="price-row" style={{ marginTop: 8 }} key={item.label}>
              <span className="muted">{item.label}</span>
              <strong>{currency}{item.amount}</strong>
            </div>
          ))}

          <div className="price-row" style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #e9dfd5" }}>
            <span style={{ fontWeight: 800 }}>Total</span>
            <strong style={{ fontSize: 24 }}>{currency}{total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
