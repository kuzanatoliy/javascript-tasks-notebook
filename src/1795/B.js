/* eslint-disable prefer-destructuring */
module.exports = {
  isItPossibleToClean: (lines, k) => {
    let l = 1;
    let r = 50;
    for (let j = 0; j < lines.length; j++) {
      if (lines[j][0] <= k && lines[j][1] >= k) {
        if (l < lines[j][0]) {
          l = lines[j][0];
        }
        if (r > lines[j][1]) {
          r = lines[j][1];
        }
      }
    }
    return l === r ? 'YES' : 'NO';
  },
};
