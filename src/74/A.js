module.exports = {
  getLeader: (arr) =>
    arr
      .map((item) => [
        item[0],
        +item[1] * 100 -
          +item[2] * 50 +
          +item[3] +
          +item[4] +
          +item[5] +
          +item[6] +
          +item[7],
      ])
      .sort((a, b) => b[1] - a[1])[0][0],
};
