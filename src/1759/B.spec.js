const { isItPossibleToGetPermutation } = require('./B');

describe('1759A. Yes-Yes?', () => {
  it.each`
    n    | sum   | array              | result
    ${1} | ${13} | ${[3, 1, 4]}       | ${'YES'}
    ${2} | ${1}  | ${[1]}             | ${'NO'}
    ${3} | ${3}  | ${[1, 4, 2]}       | ${'YES'}
    ${4} | ${1}  | ${[4, 3]}          | ${'NO'}
    ${5} | ${6}  | ${[1, 2, 3, 4, 5]} | ${'YES'}
  `('Base test: $n', ({ sum, array, result }) => {
    expect(isItPossibleToGetPermutation(sum, array)).toBe(result);
  });
});
