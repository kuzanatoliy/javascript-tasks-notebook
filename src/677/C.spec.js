const { checkLabelCount } = require('./C');

describe('677C. Vanya and Label', () => {
  it.each`
    n    | string          | result
    ${1} | ${'z'}          | ${3}
    ${2} | ${'V_V'}        | ${9}
    ${3} | ${'Codeforces'} | ${130653412}
  `('Base test: $n', ({ string, result }) => {
    expect(checkLabelCount(string)).toBe(result);
  });
});
