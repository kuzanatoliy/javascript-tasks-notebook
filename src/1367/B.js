module.exports = {
  checkEvenArray: (array) => {
    const count = [0, 0];
    for (let ii = 0; ii < array.length; ii++) {
      const mod = ii % 2;
      if (mod === array[ii] % 2) {
        continue;
      }
      count[mod]++;
    }
    return count[0] === count[1] ? count[0] : -1;
  },
};
