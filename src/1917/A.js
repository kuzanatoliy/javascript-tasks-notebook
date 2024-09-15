module.exports = {
  getOperations: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        return [0];
      }
      if (arr[j] < 0) {
        count++;
      }
    }
    return count % 2 === 0 ? [1, [1, 0]] : [0];
  },
};
