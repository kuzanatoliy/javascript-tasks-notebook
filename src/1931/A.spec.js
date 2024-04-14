const { getSmallestLetters } = require('./A');

describe('1931A. Recovering a Small String', () => {
  it.each`
    n    | number | result
    ${1} | ${24}  | ${'aav'}
    ${2} | ${70}  | ${'rzz'}
    ${3} | ${3}   | ${'aaa'}
    ${4} | ${55}  | ${'czz'}
    ${5} | ${48}  | ${'auz'}
  `('Base test: $n', ({ number, result }) => {
    expect(getSmallestLetters(number)).toBe(result);
  });
});
