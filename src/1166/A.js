module.exports = {
  getCountOfPairs: (names) => {
    const arr = new Array(26).fill(0);
    for (let j = 0; j < names.length; j++) {
      arr[names[j].charCodeAt(0) - 97]++;
    }
    let res = 0;
    for (let jj = 0; jj < arr.length; jj++) {
      const a = Math.floor(arr[jj] / 2);
      const b = arr[jj] - a;
      res += (a * (a - 1)) / 2 + (b * (b - 1)) / 2;
    }
    return res;
  },
};
