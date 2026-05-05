const { getCountOfTowers } = require('./A');

describe('2203A. Towers of Boxes', () => {
  it.each`
    n    | num  | m     | k     | result
    ${1} | ${8} | ${10} | ${20} | ${3}
    ${2} | ${8} | ${1}  | ${20} | ${1}
    ${3} | ${5} | ${3}  | ${2}  | ${5}
  `('Base test: $n', ({ num, m, k, result }) => {
    expect(getCountOfTowers(num, m, k)).toBe(result);
  });
});
