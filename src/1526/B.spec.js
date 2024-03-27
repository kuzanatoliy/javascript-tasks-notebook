const { isItPossibleToMakeString } = require('./B');

describe('1512A. Mean Inequality', () => {
  it.each`
    n    | number | result
    ${1} | ${33}  | ${'YES'}
    ${2} | ${144} | ${'YES'}
    ${3} | ${69}  | ${'NO'}
  `('Base test: $n', ({ number, result }) => {
    expect(isItPossibleToMakeString(number)).toBe(result);
  });
});
