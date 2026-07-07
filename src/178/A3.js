module.exports = {
  getOperationsCounts: (arr) => {
    let curr = 0;
    let d = 1;
    const res = [];
    while (d < arr.length) {
      d <<= 1;
    }
    for (let j = 0; j < arr.length - 1; j++) {
      if (d >= arr.length - j) {
        d >>= 1;
      }
      curr += arr[j];
      arr[j + d] += arr[j];
      res.push(curr);
    }
    return res;
  },
};
