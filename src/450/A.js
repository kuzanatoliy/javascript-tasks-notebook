module.exports = {
  getLastChild: (arr, k) => {
    let res = 0;
    let max = 0;
    for (let j = 0; j < arr.length; j++) {
      const d = Math.ceil(arr[j] / k);
      if (d >= max) {
        max = d;
        res = j;
      }
    }
    return res + 1;
  },
};
