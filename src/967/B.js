module.exports = {
  getHoleCount: (a, b, arr) => {
    const f = arr.shift();
    arr.sort((a1, a2) => a2 - a1);
    let sum = arr.reduce((s1, s2) => s1 + s2, f);
    let j = 0;
    while ((a * f) / sum < b) {
      sum -= arr[j];
      j++;
    }
    return j;
  },
};
