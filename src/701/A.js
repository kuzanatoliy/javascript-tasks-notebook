module.exports = {
  getCardPairs: (array) => {
    const arr = array
      .map((item, ind) => [item, ind + 1])
      .sort((a, b) => a[0] - b[0]);
    const pairs = [];
    const n = array.length / 2;
    for (let j = 0; j < n; j++) {
      pairs.push([arr[j][1], arr[arr.length - 1 - j][1]]);
    }
    return pairs;
  },
};
