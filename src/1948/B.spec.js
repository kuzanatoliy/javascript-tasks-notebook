const { isItPossibleToTransform } = require('./B');

describe('1948B. Array Fix', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[12, 3, 45, 67]}      | ${'YES'}
    ${2} | ${[12, 28, 5]}          | ${'NO'}
    ${3} | ${[0, 0]}               | ${'YES'}
    ${4} | ${[71, 77, 28, 39, 46]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toStrictEqual(result);
  });
});
