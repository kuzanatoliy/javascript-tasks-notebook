module.exports = {
  getCount: (m, arr) => {
    const temp = new Array(m + 1).fill(0);
    for (let j = 0; j < arr.length; j++) {
      temp[arr[j]]++;
    }
    let max = 0;
    let c = 0;
    for (let jj = 1; jj < temp.length; jj++) {
      c += temp[jj];
      max = Math.max(temp[jj] + arr.length - c + (temp[jj * 2] || 0), max);
    }
    return max;
  },
};
