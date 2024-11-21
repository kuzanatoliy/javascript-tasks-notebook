module.exports = {
  getCountOfOperations: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count = Math.max(count + 1, arr[j]);
    }
    return count - arr.length;
  },
};
