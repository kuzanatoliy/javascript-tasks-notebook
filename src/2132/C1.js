const costs = [];
function getCost(x) {
  if (!costs[x]) {
    costs[x] = 3 ** (x + 1) + x * 3 ** (x - 1);
  }
  return costs[x];
}

module.exports = {
  getMinCost: (num) => {
    let ans = 0;
    let x = 0;
    while (3 ** (x + 1) <= num) {
      x++;
    }
    while (x >= 0) {
      const w = Math.floor(num / 3 ** x);
      ans += w * getCost(x);
      num -= w * 3 ** x;
      x--;
    }

    return ans;
  },
};
