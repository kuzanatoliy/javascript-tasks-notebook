const { getBitStr } = require('./A');

describe('1694A. Creep', () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${1} | ${1} | ${'01'}
    ${2} | ${1} | ${2} | ${'011'}
    ${3} | ${5} | ${2} | ${'0101000'}
    ${4} | ${4} | ${5} | ${'010101011'}
    ${5} | ${3} | ${7} | ${'0101011111'}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getBitStr(a, b)).toBe(result);
  });
});
