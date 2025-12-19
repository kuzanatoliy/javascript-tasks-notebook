const { getTheBestNumber } = require('./A');

describe('2169A. Alice and Bob', () => {
  it.each`
    n    | num    | arr                               | result
    ${1} | ${21}  | ${[10, 20, 30, 40, 50, 60, 70]}   | ${22}
    ${2} | ${500} | ${[200, 200, 300, 500, 600, 600]} | ${499}
    ${3} | ${7}   | ${[7, 7]}                         | ${6}
  `('Base test: $n', ({ num, arr, result }) => {
    expect(getTheBestNumber(num, arr)).toBe(result);
  });
});
