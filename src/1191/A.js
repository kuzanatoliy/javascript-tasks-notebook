/* eslint-disable prefer-destructuring */
module.exports = {
  getCategory: (num) => {
    const d = num % 4;
    if (d === 0) {
      return [1, 'A'];
    } else if (d === 1) {
      return [0, 'A'];
    } else if (d === 2) {
      return [1, 'B'];
    } else {
      return [2, 'A'];
    }
  },
};
