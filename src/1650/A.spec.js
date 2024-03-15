const { isItPossibleToConvert } = require('./A');

describe('1650A. Deletions of substring Adjacent Letters', () => {
  it.each`
    n    | string               | substring | result
    ${1} | ${'abcde'}           | ${'c'}    | ${'YES'}
    ${2} | ${'abcde'}           | ${'b'}    | ${'NO'}
    ${3} | ${'x'}               | ${'y'}    | ${'NO'}
    ${4} | ${'aaaaaaaaaaaaaaa'} | ${'a'}    | ${'YES'}
    ${5} | ${'contest'}         | ${'t'}    | ${'YES'}
  `('Base test: $n', ({ string, substring, result }) => {
    expect(isItPossibleToConvert(string, substring)).toBe(result);
  });
});
