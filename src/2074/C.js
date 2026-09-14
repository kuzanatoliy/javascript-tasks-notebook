module.exports = {
  getNumber: (num) => {
    let b = 1;
    while (b < num) {
      b += b;
    }
    if (b === num || num + 1 === b) {
      return -1;
    }
    const y = b / 2 - 1;
    return y;
  },
};
