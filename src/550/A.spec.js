const { isItPossibleToDetermine } = require('./A');

describe('550A. Two Substrings', () => {
  it.each`
    n    | string       | result
    ${1} | ${'ABA'}     | ${'NO'}
    ${2} | ${'BACFAB'}  | ${'YES'}
    ${3} | ${'AXBYBXA'} | ${'NO'}
    ${4} | ${'ABAB'}    | ${'NO'}
  `('Base test: $n', ({ string, result }) => {
    expect(isItPossibleToDetermine(string)).toStrictEqual(result);
  });
});
