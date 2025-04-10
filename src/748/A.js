module.exports = {
  findPlace: (num, m, k) => {
    const mCol = m * 2;
    if (k % mCol) {
      let mR = 1;
      const nR = Math.floor(k / mCol) + 1;
      for (let i = mCol * nR - mCol + 1; i <= mCol * nR; i += 2) {
        if (i === k || i + 1 === k) {
          return [nR, mR, k % 2 ? 'L' : 'R'];
        }
        mR++;
      }
    } else {
      const nR = k / mCol;
      const mR = m;
      return [nR, mR, 'R'];
    }
    return [];
  },
};
