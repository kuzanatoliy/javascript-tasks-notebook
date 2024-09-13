module.exports = {
  getRemovedElements: (array, k) => {
    const p = array.reduce((res, curr) => res * curr, 1);
    if (2023 % p > 0) {
      return ['NO'];
    }
    const arr = new Array(k - 1).fill(1);
    arr.push(2023 / p);
    return ['YES', arr];
  },
};
