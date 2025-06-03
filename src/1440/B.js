module.exports = {
  getMidSum: (num, k, arr) => {
    const step = Math.floor(num / 2) + 1;
    let sum = 0;
    for (let j = 0, next = arr.length - step; j < k; j++, next -= step) {
      sum += arr[next];
    }
    return sum;
  },
};
