const { getA } = require('./C');

describe('2020C. Bitwise Balancing', () => {
  it.each`
    n    | B      | C     | D      | result
    ${1} | ${2n}  | ${2n} | ${2n}  | ${0n}
    ${2} | ${4n}  | ${2n} | ${6n}  | ${-1n}
    ${3} | ${10n} | ${2n} | ${14n} | ${4n}
  `('Base test: $n', ({ B, C, D, result }) => {
    expect(getA(B, C, D)).toBe(result);
  });
});
