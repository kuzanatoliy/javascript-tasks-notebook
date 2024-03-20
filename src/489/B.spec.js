const { getCountOfPairs } = require('./B');

describe('489B. BerSU Ball', () => {
  it.each`
    n    | men                | women               | result
    ${1} | ${[1, 4, 6, 2]}    | ${[5, 1, 5, 7, 9]}  | ${3}
    ${2} | ${[1, 2, 3, 4]}    | ${[10, 11, 12, 13]} | ${0}
    ${3} | ${[1, 1, 1, 1, 1]} | ${[1, 2, 3]}        | ${2}
  `('Base test: $n', ({ men, women, result }) => {
    expect(getCountOfPairs(men, women)).toBe(result);
  });
});
