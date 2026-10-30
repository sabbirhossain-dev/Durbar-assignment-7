function rankStudents(students) {
  const sorted = students
    .map((student, index) => ({ ...student, index }))
    .sort((a, b) => b.score - a.score || a.index - b.index);

  let rank = 0;
  let previousScore = null;

  return sorted.map((student, index) => {
    if (student.score !== previousScore) {
      rank = index + 1;
      previousScore = student.score;
    }

    const { index: originalIndex, ...result } = student;

    return { ...result, rank };
  });
}

console.log(
  rankStudents([
    { name: "Bob", score: 95, rank: 1 },
    { name: "Alice", score: 90, rank: 2 },
    { name: "Charlie", score: 90, rank: 2 },
    { name: "David", score: 85, rank: 4 },
  ]),
);
