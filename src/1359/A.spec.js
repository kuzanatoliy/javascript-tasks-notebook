const { getMaxCountOfPoints } = require('./A');

describe('1359A. Berland Poker', () => {
  it.each`
    n    | num   | m    | k    | result
    ${1} | ${8}  | ${3} | ${2} | ${3}
    ${2} | ${4}  | ${2} | ${4} | ${0}
    ${3} | ${9}  | ${6} | ${3} | ${1}
    ${4} | ${42} | ${0} | ${7} | ${0}
  `('Base test: $n', ({ num, m, k, result }) => {
    expect(getMaxCountOfPoints(num, m, k)).toBe(result);
  });
});
