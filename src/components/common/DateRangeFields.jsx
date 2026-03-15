import React from "react";

export default function DateRangeFields({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
  compact = false,
}) {
  return (
    <div className="two-col" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
      <div>
        {!compact ? <div className="muted" style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Check-in</div> : null}
        <input type="date" value={checkIn} onChange={(e) => onCheckInChange(e.target.value)} aria-label="Check-in date" />
      </div>
      <div>
        {!compact ? <div className="muted" style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Check-out</div> : null}
        <input type="date" value={checkOut} onChange={(e) => onCheckOutChange(e.target.value)} min={checkIn || undefined} aria-label="Check-out date" />
      </div>
    </div>
  );
}
