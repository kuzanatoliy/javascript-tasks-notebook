const { getCardPair } = require('./A');

describe('1656A. Good Pairs', () => {
  it.each`
    n    | array              | result
    ${1} | ${[5, 2, 7]}       | ${[2, 3]}
    ${2} | ${[1, 4, 2, 2, 3]} | ${[1, 2]}
    ${3} | ${[2]}             | ${[1, 1]}
  `('Base test: $n', ({ array, result }) => {
    expect(getCardPair(array)).toStrictEqual(result);
  });
});
