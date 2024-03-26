const { getMaxValueOfExpression } = require('./A');

describe('479A. Expression', () => {
  it.each`
    n    | x    | y     | z    | result
    ${1} | ${1} | ${2}  | ${3} | ${9}
    ${2} | ${2} | ${10} | ${3} | ${60}
    ${3} | ${1} | ${1}  | ${1} | ${3}
    ${4} | ${6} | ${7}  | ${1} | ${48}
  `('Base test: $n', ({ x, y, z, result }) => {
    expect(getMaxValueOfExpression(x, y, z)).toBe(result);
  });
});
