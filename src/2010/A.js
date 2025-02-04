module.exports = {
  getAlternatingSum: (arr) => {
    let sum = 0;
    for (let j = 0; j < arr.length; j += 2) {
      sum += arr[j] - (arr[j + 1] || 0);
    }
    return sum;
  },
};
