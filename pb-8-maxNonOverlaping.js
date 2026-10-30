function maxTasks(tasks) {
  // Sort tasks by finish time
  tasks.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastFinish = -Infinity;

  for (const [start, finish] of tasks) {
    // Select task if it doesn't overlap
    if (start >= lastFinish) {
      count++;
      lastFinish = finish;
    }
  }

  return count;
}

console.log(
  maxTasks([
    [1, 4],
    [2, 3],
    [3, 5],
    [7, 9],
  ]),
);

// Output: 3
