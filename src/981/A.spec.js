const { getWordLength } = require('./A');

describe('981A. Antipalindrome', () => {
  it.each`
    n    | str              | result
    ${1} | ${'mew'}         | ${3}
    ${2} | ${'wuffuw'}      | ${5}
    ${3} | ${'qqqqqqqq'}    | ${0}
    ${4} | ${'aaaaabaaaaa'} | ${10}
  `('Base test: $n', ({ str, result }) => {
    expect(getWordLength(str)).toBe(result);
  });
});
