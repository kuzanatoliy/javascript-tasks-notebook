module.exports = {
  getLength: (arr) => {
    const counts = new Array(101).fill(0);
    for (let j = 0; j < arr.length; j++) {
      counts[arr[j]]++;
    }
    counts.sort((a, b) => b - a);
    let max = 0;
    for (let jj = 0; jj < counts.length && counts[jj]; jj++) {
      const d = counts[jj] * (jj + 1);
      if (max < d) {
        max = d;
      }
    }
    return max;
  },
};
