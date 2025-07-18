const { getWinner } = require('./A');

describe('2116A. Gellyfish and Tricolor Pansy', () => {
  it.each`
    n    | a      | b      | c      | d      | result
    ${1} | ${1}   | ${2}   | ${3}   | ${4}   | ${'Flower'}
    ${2} | ${100} | ${999} | ${1}   | ${1}   | ${'Gellyfish'}
    ${3} | ${10}  | ${20}  | ${10}  | ${30}  | ${'Flower'}
    ${4} | ${12}  | ${14}  | ${13}  | ${11}  | ${'Gellyfish'}
    ${5} | ${988} | ${244} | ${353} | ${107} | ${'Gellyfish'}
  `('Base test: $n', ({ a, b, c, d, result }) => {
    expect(getWinner(a, b, c, d)).toBe(result);
  });
});
