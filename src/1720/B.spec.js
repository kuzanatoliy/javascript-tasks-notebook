const { getMaxValue } = require('./B');

describe('1720B. Interesting Sum', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 2, 2, 3, 1, 5, 6, 1]} | ${9}
    ${2} | ${[1, 2, 3, 100, 200]}      | ${297}
    ${3} | ${[3, 3, 3, 3]}             | ${0}
    ${4} | ${[7, 8, 3, 1, 1, 8]}       | ${14}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxValue(arr)).toBe(result);
  });
});
