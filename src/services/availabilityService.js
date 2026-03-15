export function overlaps(rangeStart, rangeEnd, blockedStart, blockedEnd) {
  const start = new Date(rangeStart);
  const end = new Date(rangeEnd);
  const bStart = new Date(blockedStart);
  const bEnd = new Date(blockedEnd);
  return start <= bEnd && end >= bStart;
}

export function isListingAvailable(listing, checkIn, checkOut) {
  if (!checkIn || !checkOut) return true;
  const blocked = listing.blockedRanges || [];
  return !blocked.some(([start, end]) => overlaps(checkIn, checkOut, start, end));
}
