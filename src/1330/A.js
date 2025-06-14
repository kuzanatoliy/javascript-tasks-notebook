module.exports = {
  getPosition: (arr, x) => {
    const fls = new Array(101).fill(0);
    for (let j = 0; j < arr.length; j++) {
      fls[arr[j]]++;
    }
    let p = 0;
    for (let jj = 1; fls[jj] || x; jj++) {
      if (!fls[jj]) {
        x--;
      }
      p++;
    }
    return p;
  },
};
