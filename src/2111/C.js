module.exports = {
  getCost: (arr) => {
    let cost = Infinity;
    for (let j = 0; j < arr.length; j++) {
      let r = j;
      while (arr[r + 1] === arr[j]) {
        r++;
      }
      cost = Math.min(cost, arr[j] * j + (arr.length - r - 1) * arr[j]);
      j = r;
    }
    return cost;
  },
};
