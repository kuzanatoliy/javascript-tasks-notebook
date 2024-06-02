const { getWinner } = require('./A');

describe('1919A. Wallet Exchange', () => {
  it.each`
    n     | a             | b             | result
    ${1}  | ${1}          | ${1}          | ${'Bob'}
    ${2}  | ${1}          | ${4}          | ${'Alice'}
    ${3}  | ${5}          | ${3}          | ${'Bob'}
    ${4}  | ${4}          | ${5}          | ${'Alice'}
    ${5}  | ${11}         | ${9}          | ${'Bob'}
    ${6}  | ${83}         | ${9}          | ${'Bob'}
    ${7}  | ${1032}       | ${9307}       | ${'Alice'}
    ${8}  | ${839204}     | ${7281}       | ${'Alice'}
    ${9}  | ${1000000000} | ${1000000000} | ${'Bob'}
    ${10} | ${53110}      | ${2024}       | ${'Bob'}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getWinner(a, b)).toBe(result);
  });
});
