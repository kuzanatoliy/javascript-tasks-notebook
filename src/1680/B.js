/* eslint-disable max-depth */
module.exports = {
  isItPossibleToMove: (steps) => {
    let minRows = 0;
    let minCols = 0;
    let first = false;
    let flag = true;
    for (let j = 0; j < steps.length; j++) {
      const current = steps[j];
      for (let k = 0; k < current.length; k++) {
        if (current[k] === 'R') {
          if (first) {
            if (j > minRows && k < minCols) {
              flag = false;
              break;
            }
          } else {
            first = true;
            minRows = j;
            minCols = k;
            if (j === 0 && k === 0) {
              break;
            }
          }
        }
      }
    }
    return flag ? 'YES' : 'NO';
  },
};
