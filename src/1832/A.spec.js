const { itIsPossibleToChangeString } = require('./A');

describe('1832A. New Palindrome', () => {
  it.each`
    n    | array        | result
    ${1} | ${'codedoc'} | ${'YES'}
    ${2} | ${'gg'}      | ${'NO'}
    ${3} | ${'aabaa'}   | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(itIsPossibleToChangeString(array)).toStrictEqual(result);
  });
});
