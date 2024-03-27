module.exports = {
  getSatisfyingArray: (array) => {
    array.sort((a, b) => a - b);
    const m = array.length / 2;
    const res = [];
    for (let j = 0; j < m; j++) {
      res.push(array[j]);
      res.push(array[j + m]);
    }
    return res;
  },
};
