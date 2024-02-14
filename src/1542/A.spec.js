const { isOddSet } = require('./A');

describe('1542A. Odd Set', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[2, 3, 4, 5]}             | ${'YES'}
    ${2} | ${[2, 3, 4, 5, 5, 5]}       | ${'NO'}
    ${3} | ${[2, 4]}                   | ${'NO'}
    ${4} | ${[2, 3]}                   | ${'YES'}
    ${5} | ${[1, 5, 3, 2, 6, 7, 3, 4]} | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isOddSet(array)).toBe(result);
  });
});
