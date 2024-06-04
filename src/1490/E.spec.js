const { getPossibleWinners } = require('./E');

describe('1490D. Permutation Transformation', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1]}             | ${[1]}
    ${2} | ${[1, 2, 4, 3]}    | ${[2, 3, 4]}
    ${3} | ${[1, 1, 1, 1, 1]} | ${[1, 2, 3, 4, 5]}
  `('Base test: $n', ({ array, result }) => {
    expect(getPossibleWinners(array)).toStrictEqual(result);
  });
});
