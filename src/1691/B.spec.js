const { getPermutation } = require('./B');

describe('1691A. Beat The Odds', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[1, 1, 1, 1, 1]}       | ${[2, 3, 4, 5, 1]}
    ${2} | ${[3, 6, 8, 13, 15, 21]} | ${[-1]}
  `('Base test: $n', ({ array, result }) => {
    expect(getPermutation(array)).toStrictEqual(result);
  });
});
