const { getCardPairs } = require('./A');

describe('701A. Cards', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 5, 7, 4, 4, 3]} | ${[[1, 3], [6, 2], [4, 5]]}
    ${2} | ${[10, 10, 10, 10]}   | ${[[1, 4], [2, 3]]}
  `('Base test: $n', ({ array, result }) => {
    expect(getCardPairs(array)).toStrictEqual(result);
  });
});
