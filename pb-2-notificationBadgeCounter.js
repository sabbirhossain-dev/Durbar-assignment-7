function updateNotificationCount(initialCount, events) {
  let count = initialCount;

  for (const event of events) {
    const amount = event.count ?? 1;

    if (event.type === "ADD") {
      count += amount;
    } else if (event.type === "READ") {
      count = Math.max(0, count - amount);
    } else if (event.type === "CLEAR") {
      count = 0;
    }
  }

  return count;
}

console.log(
  updateNotificationCount(2, [
    { type: "ADD", count: 3 },
    { type: "READ", count: 1 },
  ]),
);
