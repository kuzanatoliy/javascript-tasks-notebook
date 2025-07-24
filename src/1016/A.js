module.exports = {
  getCountsOfTurns: (arr, m) => {
    const res = [];
    let prev = 0;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
      const d = Math.floor(sum / m);
      res.push(d - prev);
      prev = d;
    }
    return res;
  },
};
