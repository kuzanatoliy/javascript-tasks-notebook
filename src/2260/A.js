module.exports = {
  getOperationsCount: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count += arr[j] === 0;
    }
    return count < 2 ? -1 : (arr[0] === 1) + (arr[arr.length - 1] === 1);
  },
};
