const { getCountOfEvenSubstrs } = require('./A');

describe('1139A. Even Substrings', () => {
  it.each`
    n    | str       | result
    ${1} | ${'1234'} | ${6}
    ${2} | ${'2244'} | ${10}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfEvenSubstrs(str)).toBe(result);
  });
});
