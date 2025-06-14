module.exports = {
  getMaxCount: (num, boxes) => {
    const arr = boxes.sort((a, b) => b[1] - a[1]);
    let sum = 0;
    for (let j = 0; j < arr.length && num > 0; j++) {
      sum += Math.min(arr[j][0], num) * arr[j][1];
      num -= arr[j][0];
    }
    return sum;
  },
};
