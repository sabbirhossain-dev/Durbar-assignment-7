function reconcileInventory(initialInventory, transactions) {
  const inventory = { ...initialInventory };

  if (!Array.isArray(transactions)) {
    throw new Error("Transactions must be an array");
  }

  for (const transaction of transactions) {
    const { productId, quantity, type } = transaction;

    if (inventory[productId] === undefined) {
      inventory[productId] = 0;
    }

    if (type === "in") {
      inventory[productId] += quantity;
    } else if (type === "out") {
      inventory[productId] = Math.max(0, inventory[productId] - quantity);
    }
  }

  return inventory;
}

console.log(
  reconcileInventory(
    (initialInventory = { apple: 10, banana: 5 }),
    (transactions = [
      { productId: "apple", quantity: 3, type: "in" },
      { productId: "banana", quantity: 2, type: "out" },
    ]),
  ),
);

console.log(
  reconcileInventory(
    (initialInventory = { orange: 2 }),
    (transactions = [
      { productId: "orange", quantity: 2, type: "out" },
      { productId: "grape", quantity: 7, type: "in" },
    ]),
  ),
);

//Output: {"grape":7,"orange":0}));
