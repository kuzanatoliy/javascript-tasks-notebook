const { isItPossibleToReduceArray } = require('./C');

describe('1375B. Neighbor array', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 2, 3]}          | ${'YES'}
    ${2} | ${[3, 1, 2, 4]}       | ${'YES'}
    ${3} | ${[2, 3, 1]}          | ${'NO'}
    ${4} | ${[2, 4, 6, 1, 3, 5]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToReduceArray(array)).toBe(result);
  });
});
