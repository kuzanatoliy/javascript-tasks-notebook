const { getMaxCandiesCount } = require('./F');

describe('1669F. Eating Candies', () => {
  it.each`
    n    | arr                                | result
    ${1} | ${[10, 20, 10]}                    | ${2}
    ${2} | ${[2, 1, 4, 2, 4, 1]}              | ${6}
    ${3} | ${[1, 2, 4, 8, 16]}                | ${0}
    ${4} | ${[7, 3, 20, 5, 15, 1, 11, 8, 10]} | ${7}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxCandiesCount(arr)).toBe(result);
  });
});
