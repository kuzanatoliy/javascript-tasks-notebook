module.exports = {
  getMinCost: (arrA, arrB, p) => {
    const temp = arrA
      .map((item, ind) => [item, arrB[ind]])
      .sort((a, b) => a[1] - b[1]);
    let count = arrA.length - 1;
    let cost = p;
    for (let j = 0; j < temp.length && count && temp[j][1] < p; j++) {
      const d = Math.min(temp[j][0], count);
      count -= d;
      cost += d * temp[j][1];
    }
    return cost + count * p;
  },
};
