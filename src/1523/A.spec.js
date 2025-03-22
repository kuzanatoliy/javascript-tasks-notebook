const { transformLine } = require('./A');

describe('1523A. Game of Life', () => {
  it.each`
    n    | line             | m      | result
    ${1} | ${'01000000001'} | ${3}   | ${'11111001111'}
    ${2} | ${'0110100101'}  | ${2}   | ${'1110111101'}
    ${3} | ${'10101'}       | ${2}   | ${'10101'}
    ${4} | ${'000'}         | ${100} | ${'000'}
  `('Base test: $n', ({ line, m, result }) => {
    expect(transformLine(line, m)).toBe(result);
  });
});
