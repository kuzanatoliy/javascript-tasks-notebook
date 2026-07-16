/* eslint-disable prefer-destructuring */
module.exports = {
  getPicesCount: (str) => {
    let countpic = 1;
    let sumpic = 0;
    let temp = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== temp) {
        countpic++;
        temp = str[i];
        if (str[i] === '1') {
          sumpic++;
        }
      }
    }
    if (sumpic !== 0) {
      countpic--;
    }
    return countpic;
  },
};
