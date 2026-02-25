const { isItPossibleToBuildPolindrome } = require('./A');

describe('1027A. Palindromic Twist', () => {
  it.each`
    n    | str           | result
    ${1} | ${'abccba'}   | ${'YES'}
    ${2} | ${'cf'}       | ${'NO'}
    ${3} | ${'adfa'}     | ${'YES'}
    ${4} | ${'abaazaba'} | ${'NO'}
    ${5} | ${'ml'}       | ${'NO'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToBuildPolindrome(str)).toBe(result);
  });
});
