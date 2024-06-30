module.exports = {
  getCountOfScreens: (t1, t2) => {
    let count = Math.floor(t2 / 2);
    t1 -= 7 * count;
    if (t2 % 2 === 1) {
      count++;
      t1 -= 11;
    }
    if (t1 > 0) {
      count += Math.ceil(t1 / 15);
    }
    return count;
  },
};
