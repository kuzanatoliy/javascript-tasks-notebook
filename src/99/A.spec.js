const { getIntNumber } = require('./A');

describe('99A. Help Far Away Kingdom', () => {
  it.each`
    n    | snum                        | result
    ${1} | ${'0.0'}                    | ${'0'}
    ${2} | ${'1.49'}                   | ${'1'}
    ${3} | ${'1.50'}                   | ${'2'}
    ${4} | ${'2.71828182845904523536'} | ${'3'}
    ${5} | ${'3.14159265358979323846'} | ${'3'}
    ${6} | ${'12345678901234567890.1'} | ${'12345678901234567890'}
    ${7} | ${'123456789123456789.999'} | ${'GOTO Vasilisa.'}
  `('Base test: $n', ({ snum, m, result }) => {
    expect(getIntNumber(snum, m)).toBe(result);
  });
});
