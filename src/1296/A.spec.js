const { isItPossibleToGetOddSum } = require('./A');

describe('1296A. Array with Odd Sum', () => {
  it.each`
    n    | array           | result
    ${1} | ${[2, 3]}       | ${'YES'}
    ${2} | ${[2, 2, 8, 8]} | ${'NO'}
    ${3} | ${[3, 3, 3]}    | ${'YES'}
    ${4} | ${[5, 5, 5, 5]} | ${'NO'}
    ${5} | ${[1, 1, 1, 1]} | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToGetOddSum(array)).toBe(result);
  });
});
