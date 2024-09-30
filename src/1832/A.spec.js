const { itIsPossibleToChangeString } = require('./A');

describe('1832A. New Palindrome', () => {
  it.each`
    n    | str          | result
    ${1} | ${'codedoc'} | ${'YES'}
    ${2} | ${'gg'}      | ${'NO'}
    ${3} | ${'aabaa'}   | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(itIsPossibleToChangeString(str)).toStrictEqual(result);
  });
});
