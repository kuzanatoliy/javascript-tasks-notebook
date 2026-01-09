module.exports = {
  getMapAndCost: (arr) => {
    const res = new Array(arr.length + 1).fill(0);
    const temp = arr
      .map((item, ind) => [item, ind + 1])
      .sort((a, b) => b[0] - a[0]);
    let cost = 0;
    for (let j = 0; j < temp.length; j++) {
      const d = j / 2;
      const dabs = Math.floor(d);
      if (d === dabs) {
        res[temp[j][1]] = dabs + 1;
      } else {
        res[temp[j][1]] = -1 - dabs;
      }
      cost += temp[j][0] * (dabs + 1) * 2;
    }
    return [cost, res];
  },
};
