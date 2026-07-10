const { getCountOfUniqueSubStrings } = require('./B');

describe('1917B. Erase First or Second Letter', () => {
  it.each`
    n    | str                       | result
    ${1} | ${'aaaaa'}                | ${5}
    ${2} | ${'z'}                    | ${1}
    ${3} | ${'ababa'}                | ${9}
    ${4} | ${'bcdaaaabcdaaaa'}       | ${50}
    ${5} | ${'abcdefghijklmnopqrst'} | ${210}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfUniqueSubStrings(str)).toBe(result);
  });
});
