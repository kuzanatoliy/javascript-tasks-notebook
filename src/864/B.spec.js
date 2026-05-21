const { getMaxCountOfPrettySetElements } = require('./B');

describe('864B. Polycarp and Letters', () => {
  it.each`
    n    | str               | result
    ${1} | ${'aaaaBaabAbA'}  | ${2}
    ${2} | ${'zACaAbbaazzC'} | ${3}
    ${3} | ${'ABC'}          | ${0}
  `('Base test: $n', ({ str, result }) => {
    expect(getMaxCountOfPrettySetElements(str)).toBe(result);
  });
});
