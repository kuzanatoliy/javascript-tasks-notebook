const { getMinPossibleValue } = require('./C');

describe('1324C. Frog Jumps', () => {
  it.each`
    n    | string       | result
    ${1} | ${'LRLRRLL'} | ${3}
    ${2} | ${'L'}       | ${2}
    ${3} | ${'LLR'}     | ${3}
    ${4} | ${'RRRR'}    | ${1}
    ${5} | ${'LLLLLL'}  | ${7}
    ${6} | ${'R'}       | ${1}
  `('Base test: $n', ({ string, result }) => {
    expect(getMinPossibleValue(string)).toBe(result);
  });
});
