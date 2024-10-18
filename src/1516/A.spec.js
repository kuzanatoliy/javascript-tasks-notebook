const { getLexicographicallySmallestArray } = require('./A');

describe('1511A. Tit for Tat', () => {
  it.each`
    n    | array          | k     | result
    ${1} | ${[3, 1, 4]}   | ${1}  | ${[2, 1, 5]}
    ${2} | ${[1, 0]}      | ${10} | ${[0, 1]}
    ${3} | ${[0, 98, 93]} | ${16} | ${[0, 82, 109]}
  `('Base test: $n', ({ array, k, result }) => {
    expect(getLexicographicallySmallestArray(array, k)).toStrictEqual(result);
  });
});
