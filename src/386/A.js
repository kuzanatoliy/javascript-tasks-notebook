module.exports = {
  getWinner: (array) => {
    const arr = array
      .map((val, ind) => [ind + 1, val])
      .sort((a, b) => b[1] - a[1]);
    return [arr[0][0], arr[1][1]];
  },
};
