module.exports = {
  getSizeOfGift: (arr) => {
    const counts = new Array(arr.length).fill(0);
    for (let j = 0; j < arr.length; j++) {
      counts[arr[j] - 1]++;
    }
    const c = counts.filter((item) => !!item).sort((a, b) => a - b);
    const fl = new Array(arr.length).fill(0);
    let size = 0;
    for (let jj = 0; jj < c.length; jj++) {
      if (fl[c[jj] - 1] === 0) {
        size += c[jj];
        fl[c[jj] - 1]++;
        continue;
      }
      c[jj]--;
      while (c[jj]) {
        if (fl[c[jj] - 1] === 0) {
          size += c[jj];
          fl[c[jj] - 1]++;
          break;
        }
        c[jj]--;
      }
    }
    return size;
  },
};
