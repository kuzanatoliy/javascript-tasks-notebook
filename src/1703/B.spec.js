const { getNumbersOfBalloons } = require('./B');

describe('1703B. ICPC Balloons', () => {
  it.each`
    n    | string          | result
    ${1} | ${'ABA'}        | ${5}
    ${2} | ${'A'}          | ${2}
    ${3} | ${'ORZ'}        | ${6}
    ${4} | ${'BAAAA'}      | ${7}
    ${5} | ${'BKPT'}       | ${8}
    ${6} | ${'CODEFORCES'} | ${17}
  `('Base test: $n', ({ string, result }) => {
    expect(getNumbersOfBalloons(string)).toBe(result);
  });
});
