const { getMaxScore } = require('./A');

describe('1993A. Question Marks', () => {
  it.each`
    n    | keys                      | k    | result
    ${1} | ${'ABCD'}                 | ${1} | ${4}
    ${2} | ${'AAAAAAAA'}             | ${2} | ${2}
    ${3} | ${'AAAABBBB'}             | ${2} | ${4}
    ${4} | ${'????????'}             | ${2} | ${0}
    ${5} | ${'ABCABCABCABC'}         | ${3} | ${9}
    ${6} | ${'ACADC??ACAC?DCAABC?C'} | ${5} | ${13}
  `('Base test: $n', ({ keys, k, result }) => {
    expect(getMaxScore(keys, k)).toBe(result);
  });
});
