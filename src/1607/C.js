module.exports = {
  getMaxPossibleValue: (arr) => {
    arr.sort((a, b) => a - b);
    let [mx] = arr;
    let x = mx;

    for (let j = 1; j < arr.length; j++) {
      arr[j] -= x;
      mx = Math.max(mx, arr[j]);
      x += arr[j];
    }
    return mx;
  },
};
