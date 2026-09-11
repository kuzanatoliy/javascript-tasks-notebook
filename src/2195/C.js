module.exports = {
  getOperationsCount: (arr) => {
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] + arr[j] === 7 || arr[j - 1] === arr[j]) {
        count++;
        j++;
      }
    }
    return count;
  },
};
