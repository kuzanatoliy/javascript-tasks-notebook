/* eslint-disable no-constant-condition */
module.exports = {
  getCountOfSteps: (num) => {
    if (100 % num === 0) {
      return 100 / num;
    }
    let res = 100;
    while (true) {
      if (num % 2 === 0 && res % 2 === 0) {
        num /= 2;
        res /= 2;
        continue;
      }
      if (num % 5 === 0 && res % 5 === 0) {
        num /= 5;
        res /= 5;
        continue;
      }
      break;
    }
    return res;
  },
};
