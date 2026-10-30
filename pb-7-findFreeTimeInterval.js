function findFreeTime(bookings, workingHours) {
  const [start, end] = workingHours;

  // Sort bookings by start time
  const sorted = bookings
    .map(([s, e]) => [Math.max(s, start), Math.min(e, end)])
    .filter(([s, e]) => s < e)
    .sort((a, b) => a[0] - b[0]);

  const freeSlots = [];
  let currentTime = start;

  for (const [bookingStart, bookingEnd] of sorted) {
    // Check if there is a free gap
    if (bookingStart > currentTime) {
      freeSlots.push([currentTime, bookingStart]);
    }

    // Move current time forward
    currentTime = Math.max(currentTime, bookingEnd);
  }

  // Check for free time after the last booking
  if (currentTime < end) {
    freeSlots.push([currentTime, end]);
  }

  return freeSlots;
}

console.log(
  findFreeTime(
    [
      [10, 12],
      [14, 16],
    ],
    [9, 17],
  ),
);

// Output:
// [[9, 10], [12, 14], [16, 17]]
