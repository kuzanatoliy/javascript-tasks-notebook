/* eslint-disable prefer-destructuring */
module.exports = {
  getWinner: (array) => {
    const map = {};
    for (let j = 0; j < array.length; j++) {
      map[array[j]] = (map[array[j]] || 0) + 1;
    }
    const vals = Object.keys(map)
      .map((item) => [+item, map[item]])
      .filter((item) => item[1] === 1);
    if (vals.length === 0) {
      return -1;
    }
    let min = vals[0][0];
    for (let jj = 1; jj < vals.length; jj++) {
      if (min > vals[jj][0]) {
        min = vals[jj][0];
      }
    }
    for (let j = 0; j < array.length; j++) {
      if (array[j] === min) {
        return j + 1;
      }
    }
    return -1;
  },
};
