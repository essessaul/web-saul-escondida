import React, { useEffect, useMemo, useState } from "react";
import { getAvailabilityCalendar } from "../../services/calendarService";

function pad(num) {
  return String(num).padStart(2, "0");
}

function makeDate(day) {
  return `2026-04-${pad(day)}`;
}

function formatDate(value) {
  return value || "";
}

function nightsBetween(start, end) {
  if (!start || !end) return 0;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diff = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

function isWithinRange(day, start, end) {
  if (!start || !end) return false;
  const current = new Date(makeDate(day));
  return current >= new Date(start) && current <= new Date(end);
}

export default function PropertyAvailabilityCalendar({
  title = "Availability Calendar",
  nightlyRate = 0,
  cleaningFee = 0,
  currency = "$",
}) {
  const [calendar, setCalendar] = useState([]);
  const [selectedStart, setSelectedStart] = useState("");
  const [selectedEnd, setSelectedEnd] = useState("");
  const [includeCleaning, setIncludeCleaning] = useState(true);
  const [includeInsurance, setIncludeInsurance] = useState(false);

  const insuranceFee = 39;

  useEffect(() => {
    getAvailabilityCalendar().then(setCalendar);
  }, []);

  function handleDayClick(day, status) {
    if (status !== "available") return;
    const clickedDate = makeDate(day);

    // first click selects start
    if (!selectedStart) {
      setSelectedStart(clickedDate);
      setSelectedEnd("");
      return;
    }

    // second click selects end and highlights all dates in between
    if (!selectedEnd) {
      if (new Date(clickedDate) <= new Date(selectedStart)) {
        setSelectedStart(clickedDate);
        setSelectedEnd("");
      } else {
        setSelectedEnd(clickedDate);
      }
      return;
    }

    // third click starts over
    setSelectedStart(clickedDate);
    setSelectedEnd("");
  }

  const nights = useMemo(() => nightsBetween(selectedStart, selectedEnd), [selectedStart, selectedEnd]);
  const baseTotal = nights * Number(nightlyRate || 0);
  const extraCleaning = includeCleaning ? Number(cleaningFee || 0) : 0;
  const extraInsurance = includeInsurance ? insuranceFee : 0;
  const total = baseTotal + extraCleaning + extraInsurance;

  const rangeLabel = useMemo(() => {
    if (selectedStart && selectedEnd) {
      return `Selected range: ${formatDate(selectedStart)} to ${formatDate(selectedEnd)}`;
    }
    if (selectedStart) {
      return `Selected start date: ${formatDate(selectedStart)}. Click a second date to complete the range.`;
    }
    return "Click one available date for check-in and a second available date for check-out.";
  }, [selectedStart, selectedEnd]);

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <div className="price-row" style={{ marginBottom: "1rem", gap: "1rem", flexWrap: "wrap" }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <div className="muted" style={{ fontWeight: 600 }}>{rangeLabel}</div>
      </div>

      <div className="calendar-grid">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
          <div key={d} className="calendar-header">{d}</div>
        ))}
        {calendar.map((item) => {
          const currentDate = makeDate(item.day);
          const isStart = selectedStart === currentDate;
          const isEnd = selectedEnd === currentDate;
          const inRange = isWithinRange(item.day, selectedStart, selectedEnd);

          let className = `calendar-day ${item.status}`;
          if (inRange) className += " calendar-day-range";
          if (isStart || isEnd) className += " calendar-day-selected";

          return (
            <button
              key={item.day}
              type="button"
              className={className}
              onClick={() => handleDayClick(item.day, item.status)}
              style={{ border: "none" }}
              aria-label={`Day ${item.day}`}
            >
              {item.day}
            </button>
          );
        })}
      </div>

      <div className="card" style={{ padding: "1rem", marginTop: "1rem" }}>
        <div className="option-list">
          <label className="option-row">
            <input type="checkbox" checked={includeCleaning} onChange={(e) => setIncludeCleaning(e.target.checked)} />
            <span>Cleaning fee</span>
            {includeCleaning ? <strong>{currency}{cleaningFee}</strong> : null}
          </label>
          <label className="option-row">
            <input type="checkbox" checked={includeInsurance} onChange={(e) => setIncludeInsurance(e.target.checked)} />
            <span>Insurance</span>
            {includeInsurance ? <strong>{currency}{insuranceFee}</strong> : null}
          </label>
        </div>

        <div className="booking-summary-box" style={{ marginTop: "1rem" }}>
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
            <strong>{currency}{baseTotal}</strong>
          </div>
          {includeCleaning ? <div className="price-row" style={{ marginTop: 8 }}><span className="muted">Cleaning fee</span><strong>{currency}{cleaningFee}</strong></div> : null}
          {includeInsurance ? <div className="price-row" style={{ marginTop: 8 }}><span className="muted">Insurance</span><strong>{currency}{insuranceFee}</strong></div> : null}
          <div className="price-row" style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #e9dfd5" }}>
            <span style={{ fontWeight: 800 }}>Total</span>
            <strong style={{ fontSize: 24 }}>{currency}{total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
