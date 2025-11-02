/* eslint-disable complexity */
module.exports = {
  isNumberExisted: (x, y, z) => {
    for (let i = 0; i < 31; i++) {
      const a = (x >> i) & 1;
      const b = (y >> i) & 1;
      const c = (z >> i) & 1;

      if (
        !(
          (a === 0 && b === 0 && c === 0) ||
          (a === 0 && b === 1 && c === 0) ||
          (a === 0 && b === 0 && c === 1) ||
          (a === 1 && b === 0 && c === 0) ||
          (a === 1 && b === 1 && c === 1)
        )
      ) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
