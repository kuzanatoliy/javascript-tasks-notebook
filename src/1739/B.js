module.exports = {
  restoreArray: (arr) => {
    const res = [arr[0]];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== 0 && res[j - 1] - arr[j] >= 0) {
        return [-1];
      }
      res.push(arr[j] + res[j - 1]);
    }
    return res;
  },
};
