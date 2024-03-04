const { getLengthOfSubstring } = require('./A');

describe('1927A. Make it White', () => {
  it.each`
    n    | string         | result
    ${1} | ${'WBBWBW'}    | ${4}
    ${2} | ${'B'}         | ${1}
    ${3} | ${'WB'}        | ${1}
    ${4} | ${'BBW'}       | ${2}
    ${5} | ${'BWWB'}      | ${4}
    ${6} | ${'BWBWWB'}    | ${6}
    ${7} | ${'WWBBWB'}    | ${4}
    ${8} | ${'WBWBWWWBW'} | ${7}
  `('Base test: $n', ({ string, result }) => {
    expect(getLengthOfSubstring(string)).toBe(result);
  });
});
