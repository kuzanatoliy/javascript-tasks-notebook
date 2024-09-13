module.exports = {
  getLength: (l, r) => {
    let step = 0;
    while (l <= r) {
      step++;
      l += step;
    }
    return step;
  },
};
