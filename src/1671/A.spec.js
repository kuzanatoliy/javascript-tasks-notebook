const { isItPossibleToBuildString } = require('./A');

describe('1671A. String Building', () => {
  it.each`
    n    | str             | result
    ${1} | ${'aaaabbb'}    | ${'YES'}
    ${2} | ${'bbaaaaabbb'} | ${'YES'}
    ${3} | ${'aaaaaa'}     | ${'YES'}
    ${4} | ${'abab'}       | ${'NO'}
    ${5} | ${'a'}          | ${'NO'}
    ${6} | ${'b'}          | ${'NO'}
    ${7} | ${'aaaab'}      | ${'NO'}
    ${3} | ${'bbaaa'}      | ${'YES'}
    ${4} | ${'baabb'}      | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToBuildString(str)).toBe(result);
  });
});
