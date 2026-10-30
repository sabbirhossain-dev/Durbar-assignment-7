function countFilesInFolder(structure) {
  let count = 0;

  for (const item of structure) {
    if (item.type === "file") {
      count++;
    } else if (item.type === "folder") {
      count += countFilesInFolder(item.children);
    }
  }

  return count;
}

const structure1 = [
  { name: "document.txt", type: "file" },
  {
    name: "images",
    type: "folder",
    children: [
      { name: "photo1.jpg", type: "file" },
      { name: "photo2.png", type: "file" },
    ],
  },
  { name: "report.pdf", type: "file" },
];

console.log(countFilesInFolder(structure1));

// Output: 4
