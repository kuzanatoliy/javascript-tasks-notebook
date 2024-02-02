const { getMinPossiblePenalty } = require('./B');

describe('1919B. Plus-Minus Split', () => {
  it.each`
    n    | string                    | result
    ${1} | ${'+'}                    | ${1}
    ${2} | ${'-----'}                | ${5}
    ${3} | ${'+-+-+-'}               | ${0}
    ${4} | ${'--+++++++-'}           | ${4}
    ${5} | ${'+---++++-+++++---++-'} | ${4}
  `('Base test: $n', ({ string, result }) => {
    expect(getMinPossiblePenalty(string)).toBe(result);
  });
});
