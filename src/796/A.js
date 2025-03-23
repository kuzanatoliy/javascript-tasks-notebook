module.exports = {
  getDistance: (array, m, val) => {
    const arr = array
      .map((item, ind) => [item, Math.abs(ind + 1 - m) * 10])
      .filter((item) => item[0] !== 0)
      .sort((a, b) => a[1] - b[1]);
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][0] <= val) {
        return arr[j][1];
      }
    }
    return 0;
  },
};
