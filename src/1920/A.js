/* eslint-disable prefer-destructuring */
module.exports = {
  getNumbers: (constraints) => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < constraints.length; i++) {
      if (constraints[i][0] === 1 && constraints[i][1] > max) {
        max = constraints[i][1];
      }
      if (constraints[i][0] === 2 && constraints[i][1] < min) {
        min = constraints[i][1];
      }
    }

    if (max > min) {
      return 0;
    }

    const s = new Set();

    for (let i = 0; i < constraints.length; i++) {
      if (
        constraints[i][0] === 3 &&
        constraints[i][1] <= min &&
        constraints[i][1] >= max
      ) {
        s.add(constraints[i][1]);
      }
    }

    return min - max + 1 - s.size;
  },
};
