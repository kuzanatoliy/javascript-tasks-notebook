/* eslint-disable curly */
const PI = '3141592653589793238462643383279';

module.exports = {
  getCountOfEqualSymbols: (memory) => {
    let j = 0;
    for (j = 0; memory[j] === PI[j]; j++);
    return j;
  },
};
