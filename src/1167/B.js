/* eslint-disable complexity */
const NUMBERS = [42, 23, 16, 15, 8, 4];

module.exports = {
  getLostNumbers: (questionResults) => {
    const res = [];
    for (let j = 0; j < NUMBERS.length; j++) {
      if (
        questionResults[0] !== NUMBERS[j] &&
        questionResults[1] !== NUMBERS[j] &&
        questionResults[0] % NUMBERS[j] === 0 &&
        questionResults[1] % NUMBERS[j] === 0
      ) {
        const d1 = questionResults[0] / NUMBERS[j];
        const d2 = questionResults[1] / NUMBERS[j];
        if (
          d1 !== NUMBERS[j] &&
          d2 !== NUMBERS[j] &&
          NUMBERS.indexOf(d1) !== -1 &&
          NUMBERS.indexOf(d2) !== -1
        ) {
          res.push(NUMBERS[j]);
          res.push(d1);
          res.push(d2);
          break;
        }
      }
    }
    for (let j = 0; j < NUMBERS.length; j++) {
      if (
        questionResults[2] !== NUMBERS[j] &&
        questionResults[3] !== NUMBERS[j] &&
        questionResults[2] % NUMBERS[j] === 0 &&
        questionResults[3] % NUMBERS[j] === 0
      ) {
        const d1 = questionResults[2] / NUMBERS[j];
        const d2 = questionResults[3] / NUMBERS[j];
        if (
          d1 !== NUMBERS[j] &&
          d2 !== NUMBERS[j] &&
          NUMBERS.indexOf(d1) !== -1 &&
          NUMBERS.indexOf(d2) !== -1
        ) {
          res.push(NUMBERS[j]);
          res.push(d1);
          res.push(d2);
          break;
        }
      }
    }
    return res;
  },
};
