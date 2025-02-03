module.exports = {
  getMaxCountOfPoints: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count += arr[j] % 2;
    }
    return count === arr.length ? count - 1 : 1 + count;
  },
};
