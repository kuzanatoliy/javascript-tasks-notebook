module.exports = {
  getMaxScore: (arr) => {
    const fs = new Array(arr.length + 1).fill(0);
    for (let j = 0; j < arr.length; j++) {
      fs[arr[j]]++;
    }
    let c1 = 0;
    let c2 = 0;
    for (let jj = 1; jj < fs.length; jj++) {
      if (fs[jj] === 0) {
        continue;
      }
      if (fs[jj] === 1) {
        c1++;
        continue;
      }
      c2++;
    }
    return Math.ceil(c1 / 2) * 2 + c2;
  },
};
