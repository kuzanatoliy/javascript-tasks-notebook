const { getMinSum } = require('./B');

describe('1566A. Median Maximization', () => {
  it.each`
    n    | map        | result
    ${1} | ${'01'}    | ${1}
    ${2} | ${'1111'}  | ${0}
    ${3} | ${'01100'} | ${2}
    ${4} | ${'101'}   | ${1}
    ${5} | ${'0000'}  | ${1}
    ${6} | ${'01010'} | ${2}
  `('Base test: $n', ({ map, result }) => {
    expect(getMinSum(map)).toBe(result);
  });
});
