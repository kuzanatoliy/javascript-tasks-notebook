module.exports = {
  getCountOfAdditionalWalksAndShedule: (arr, k) => {
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      const d = Math.min(0, arr[j] + arr[j - 1] - k);
      count -= d;
      arr[j] -= d;
    }
    return [count, arr];
  },
};
