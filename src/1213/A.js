module.exports = {
  getCost: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count += arr[j] % 2;
    }
    return Math.min(count, arr.length - count);
  },
};
