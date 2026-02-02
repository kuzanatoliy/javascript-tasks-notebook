module.exports = {
  getCost: (arr) => {
    let cost = 0;
    let max = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        const d = arr[j - 1] - arr[j];
        arr[j] = arr[j - 1];
        cost += d;
        max = Math.max(d, max);
      }
    }
    return cost + max;
  },
};
