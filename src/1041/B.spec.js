const { getVariantCount } = require('./B');

describe('1041B. Buying a TV Set', () => {
  it.each`
    n    | w                       | h                       | x                      | y                      | result
    ${1} | ${17n}                  | ${15n}                  | ${5n}                  | ${3n}                  | ${3n}
    ${2} | ${14n}                  | ${16n}                  | ${7n}                  | ${22n}                 | ${0n}
    ${3} | ${4n}                   | ${2n}                   | ${6n}                  | ${4n}                  | ${1n}
    ${4} | ${1000000000000000000n} | ${1000000000000000000n} | ${999999866000004473n} | ${999999822000007597n} | ${1000000063n}
  `('Base test: $n', ({ w, h, x, y, result }) => {
    expect(getVariantCount(w, h, x, y)).toBe(result);
  });
});
