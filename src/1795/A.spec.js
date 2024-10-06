const { isItPossibleToReorder } = require('./A');

describe('1795A. Two Towers', () => {
  it.each`
    n    | str1       | str2         | result
    ${1} | ${'BRBB'}  | ${'RBR'}     | ${'YES'}
    ${2} | ${'BRBR'}  | ${'RRBRBRB'} | ${'YES'}
    ${3} | ${'RBR'}   | ${'BRBR'}    | ${'YES'}
    ${4} | ${'BRBRR'} | ${'BRBR'}    | ${'NO'}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(isItPossibleToReorder(str1, str2)).toBe(result);
  });
});
