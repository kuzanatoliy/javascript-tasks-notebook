module.exports = {
  getAmount: (count, price, bundlePrice) =>
    2 * price < bundlePrice
      ? count * price
      : Math.floor(count / 2) * bundlePrice + (count % 2) * price,
};
