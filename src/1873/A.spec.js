const { isItPossibleToMakeRow } = require('./A');

describe('1873A. Short Sort', () => {
  it.each`
    n    | string   | result
    ${1} | ${'abc'} | ${'YES'}
    ${2} | ${'acb'} | ${'YES'}
    ${3} | ${'bac'} | ${'YES'}
    ${4} | ${'bca'} | ${'NO'}
    ${5} | ${'cab'} | ${'NO'}
    ${6} | ${'cba'} | ${'YES'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToMakeRow(string)).toBe(result);
  });
});
