const { getMaxPositiveElemCount } = require('./A');

describe('2224A. Zhily and Array Operating', () => {
  it.each`
    n    | arr                          | result
    ${1} | ${[0, -1, 3, -3, 0]}         | ${3}
    ${2} | ${[0, -2, 1, 2, 3]}          | ${5}
    ${3} | ${[0, 1, 0, 1, 0]}           | ${4}
    ${4} | ${[1000000000, -1000000000]} | ${1}
    ${5} | ${[-4, 2, -3, -4]}           | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxPositiveElemCount(arr)).toBe(result);
  });
});
