module.exports = {
  getPositions: (array) => {
    const arr = array
      .map((item, ind) => [item, ind])
      .sort((a, b) => b[0] - a[0]);
    const res = new Array(arr.length);
    let w = 1;
    res[arr[0][1]] = w;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j][0] !== arr[j - 1][0]) {
        w = j + 1;
      }
      res[arr[j][1]] = w;
    }
    return res;
  },
};
