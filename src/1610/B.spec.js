const { isKalindrome } = require('./B');

describe('1610B. Kalindrome Array', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1]}             | ${'YES'}
    ${2} | ${[1, 2]}          | ${'YES'}
    ${3} | ${[1, 2, 3]}       | ${'NO'}
    ${4} | ${[1, 4, 4, 1, 4]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isKalindrome(arr)).toStrictEqual(result);
  });
});
