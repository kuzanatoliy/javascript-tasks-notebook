const { getCountOfPairs } = require('./A');

describe('214A. System of Equations', () => {
  it.each`
    n    | x     | y     | result
    ${1} | ${9}  | ${3}  | ${1}
    ${2} | ${14} | ${28} | ${1}
    ${3} | ${4}  | ${20} | ${0}
    ${4} | ${1}  | ${1}  | ${2}
  `('Base test: $n', ({ x, y, result }) => {
    expect(getCountOfPairs(x, y)).toBe(result);
  });
});
