const { getOrder } = require('./B1');

describe('1234A. Equalize Prices Again', () => {
  it.each`
    n    | k    | arr                               | result
    ${1} | ${2} | ${[1, 2, 3, 2, 1, 3, 2]}          | ${[2, 1]}
    ${2} | ${4} | ${[2, 3, 3, 1, 1, 2, 1, 2, 3, 3]} | ${[1, 3, 2]}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getOrder(k, arr)).toStrictEqual(result);
  });
});
