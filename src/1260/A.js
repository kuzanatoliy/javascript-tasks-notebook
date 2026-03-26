module.exports = {
  getMinCost: (count, sum) => {
    const c1 = sum % count;
    const cost1 = c1 * Math.ceil(sum / count) ** 2;
    const cost2 = (count - c1) * Math.floor(sum / count) ** 2;
    return cost1 + cost2;
  },
};
