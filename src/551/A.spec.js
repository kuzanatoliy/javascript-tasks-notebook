const { getPositions } = require('./A');

describe('551A. Combination Lock', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 3, 3]}       | ${[3, 1, 1]}
    ${2} | ${[1]}             | ${[1]}
    ${3} | ${[3, 5, 3, 4, 5]} | ${[4, 1, 4, 3, 1]}
  `('Base test: $n', ({ array, result }) => {
    expect(getPositions(array)).toStrictEqual(result);
  });
});
