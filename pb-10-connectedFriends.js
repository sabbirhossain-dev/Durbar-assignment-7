function countConnectedFriends(friendships, startPerson) {
  const graph = {};

  // Step 1: Build adjacency list
  for (const [person1, person2] of friendships) {
    if (!graph[person1]) graph[person1] = [];
    if (!graph[person2]) graph[person2] = [];

    graph[person1].push(person2);
    graph[person2].push(person1);
  }

  // Step 2: Track visited people
  const visited = new Set();

  // Step 3: DFS traversal
  function dfs(person) {
    if (visited.has(person)) return;

    visited.add(person);

    for (const friend of graph[person] || []) {
      dfs(friend);
    }
  }

  dfs(startPerson);

  // Step 4: Return total connected people
  return visited.size;
}

console.log(
  countConnectedFriends(
    [
      ["Alice", "Bob"],
      ["Bob", "Charlie"],
      ["David", "Eve"],
    ],
    "Alice",
  ),
);
// Output: 3
