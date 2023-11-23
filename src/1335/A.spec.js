const { getCountOfWays } = require('./A');

describe('1335A. Candies and Two Sisters', () => {
  it.each`
    n    | candidates    | result
    ${1} | ${7}          | ${3}
    ${2} | ${1}          | ${0}
    ${3} | ${2}          | ${0}
    ${4} | ${3}          | ${1}
    ${5} | ${2000000000} | ${999999999}
    ${6} | ${763243547}  | ${381621773}
  `('Base test: $n', ({ candidates, result }) => {
    expect(getCountOfWays(candidates)).toBe(result);
  });
});
