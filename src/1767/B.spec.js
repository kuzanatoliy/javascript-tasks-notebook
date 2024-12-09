const { getMaxValue } = require('./B');

describe('1767B. Block Towers', () => {
  it.each`
    n    | array                              | result
    ${1} | ${[1, 2, 3]}                       | ${3}
    ${2} | ${[1, 2, 2]}                       | ${2}
    ${3} | ${[1, 1000000000]}                 | ${500000001}
    ${4} | ${[3, 8, 6, 7, 4, 1, 2, 4, 10, 1]} | ${9}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxValue(array)).toBe(result);
  });
});
