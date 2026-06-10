module.exports = {
  getOperations: (arr) => {
    const res = [];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] < 0 !== arr[j] < 0) {
        res.push(j);
      }
    }
    if (arr[arr.length - 1] > 0) {
      res.push(arr.length);
    }
    return res.reverse();
  },
};
