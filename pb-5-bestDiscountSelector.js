function selectBestDiscount(price, offers) {
  let bestOffer = null;
  let lowestPrice = price;

  for (const offer of offers) {
    // Check eligibility
    if (price < offer.minPrice) {
      continue;
    }

    let discountedPrice;

    // Calculate discounted price
    if (offer.type === "flat") {
      discountedPrice = price - offer.value;
    } else if (offer.type === "percent") {
      discountedPrice = price - (price * offer.value) / 100;
    }

    // Price cannot go below zero
    discountedPrice = Math.max(0, discountedPrice);

    // Update best offer if it gives a lower price
    if (discountedPrice < lowestPrice) {
      lowestPrice = discountedPrice;
      bestOffer = offer;
    }
  }

  return bestOffer;
}

console.log(
  selectBestDiscount(200, [
    { minPrice: 100, name: "SAVE20", type: "flat", value: 20 },
    { minPrice: 150, name: "25PERCENT", type: "percent", value: 25 },
  ]),
);
