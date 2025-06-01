const { getPair } = require('./A');

describe('2114A. Square Year', () => {
  it.each`
    n    | snum      | result
    ${1} | ${'0001'} | ${[0, 1]}
    ${2} | ${'1001'} | ${[-1]}
    ${3} | ${'1000'} | ${[-1]}
    ${4} | ${'4900'} | ${[0, 70]}
    ${5} | ${'2025'} | ${[0, 45]}
  `('Base test: $n', ({ snum, result }) => {
    expect(getPair(snum)).toStrictEqual(result);
  });
});
