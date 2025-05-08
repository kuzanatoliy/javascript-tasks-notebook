module.exports = {
  getScore: (arr, k) => {
    let score = 0;
    const counts = new Array(k - 1).fill(0);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < k) {
        counts[arr[j] - 1]++;
      }
    }
    let l = 0;
    let r = counts.length - 1;
    while (l < r) {
      score += Math.min(counts[l], counts[r]);
      l++;
      r--;
    }
    if (l === r) {
      score += Math.floor(counts[l] / 2);
    }
    return score;
  },
};
