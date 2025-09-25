module.exports = {
  getMaxSum: (str) => {
    const counts = new Array(str.length).fill(0);
    const set = new Set();
    for (let j = 0; j < str.length; j++) {
      set.add(str[j]);
      counts[j] += set.size;
    }
    set.clear();
    let max = 0;
    for (let jj = str.length - 1; jj > 0; jj--) {
      set.add(str[jj]);
      max = Math.max(max, set.size + counts[jj - 1]);
    }
    return max;
  },
};
