module.exports = {
  getMinCountOfBurles: (array) => {
    let sl = 1;
    let sr = 1;
    while (sl < array.length && array[0] === array[sl]) {
      sl++;
    }
    while (
      sr < array.length &&
      array[array.length - 1] === array[array.length - sr - 1] &&
      sl + sr < array.length
    ) {
      sr++;
    }
    if (array[0] === array[array.length - 1]) {
      const s = sl + sr;
      return s > array.length ? 0 : array.length - sl - sr;
    }
    return array.length - Math.max(sl, sr);
  },
};
