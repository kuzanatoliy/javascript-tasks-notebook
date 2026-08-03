const { isItPossibleToTransform } = require('./A');

describe('2241A. Divide and Conquer', () => {
  it.each`
    n    | x     | y     | result
    ${1} | ${12} | ${2}  | ${'YES'}
    ${2} | ${6}  | ${7}  | ${'NO'}
    ${3} | ${99} | ${79} | ${'NO'}
  `('Base test: $n', ({ x, y, result }) => {
    expect(isItPossibleToTransform(x, y)).toBe(result);
  });
});
