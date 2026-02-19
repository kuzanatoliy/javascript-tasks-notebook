const { getMaxCount } = require('./B');

describe('1139B. Chocolates', () => {
  it.each`
    n    | arr                 | result
    ${1} | ${[1, 2, 1, 3, 6]}  | ${10}
    ${2} | ${[3, 2, 5, 4, 10]} | ${20}
    ${3} | ${[1, 1, 1, 1]}     | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxCount(arr)).toBe(result);
  });
});
