function trackElevator(startFloor, minFloor, maxFloor, commands) {
  let currentFloor = startFloor;

  for (const command of commands) {
    if (command === "UP") {
      currentFloor = Math.min(currentFloor + 1, maxFloor);
    } else if (command === "DOWN") {
      currentFloor = Math.max(currentFloor - 1, minFloor);
    }
  }

  return currentFloor;
}

console.log(trackElevator(2, 0, 5, ["UP", "UP", "UP", "DOWN", "UP", "UP"]));
