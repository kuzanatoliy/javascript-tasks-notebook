module.exports = {
  getCardPair: (array) => {
    const arr = array
      .map((item, ind) => [item, ind + 1])
      .sort((a, b) => a[0] - b[0]);
    return [arr[0][1], arr[arr.length - 1][1]];
  },
};
