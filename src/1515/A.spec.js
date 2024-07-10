const { isItPossibleToPlace } = require('./A');

describe('1515A. Phoenix and Gold', () => {
  it.each`
    n    | array              | k    | result
    ${1} | ${[3, 2, 1]}       | ${2} | ${['YES', [3, 2, 1]]}
    ${2} | ${[1, 2, 3, 4, 8]} | ${3} | ${['YES', [1, 3, 2, 4, 8]]}
    ${3} | ${[5]}             | ${5} | ${['NO']}
    ${4} | ${[4, 5]}          | ${4} | ${['YES', [5, 4]]}
  `('Base test: $n', ({ array, k, result }) => {
    expect(isItPossibleToPlace(array, k)).toStrictEqual(result);
  });
});
