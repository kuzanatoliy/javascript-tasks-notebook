module.exports = {
  getIndexes: (array) => {
    const arr = array.map((item, ind) => [item, ind + 1]);
    const evens = arr.filter((item) => item[0] % 2 === 0);
    if (evens.length) {
      return evens.map((item) => item[1]);
    }
    if (arr.length === 1) {
      return -1;
    } else {
      return [1, 2];
    }
  },
};
