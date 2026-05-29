module.exports = {
  getMaxAmount: (set1, set2) => {
    const temp = [...set1, ...set2].sort((a, b) => b[1] - a[1]);
    const set = new Set();
    let sum = 0;
    for (let j = 0; j < temp.length; j++) {
      if (!set.has(temp[j][0])) {
        sum += temp[j][1];
        set.add(temp[j][0]);
      }
    }
    return sum;
  },
};
