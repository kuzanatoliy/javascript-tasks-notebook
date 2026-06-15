module.exports = {
  getScheduleAndPower: (k, arr) => {
    const temp = arr
      .map((item, ind) => [item, ind + 1])
      .sort((a, b) => b[0] - a[0])
      .slice(0, k);
    return [temp[k - 1][0], temp.map((item) => item[1]).sort((a, b) => a - b)];
  },
};
