const { getCountOfOperations } = require('./A');

describe('1720A. Burenka Plays with Fractions', () => {
  it.each`
    n    | a             | b             | c             | d             | result
    ${1} | ${2n}         | ${1n}         | ${1n}         | ${1n}         | ${2}
    ${2} | ${6n}         | ${3n}         | ${2n}         | ${1n}         | ${0}
    ${3} | ${1n}         | ${2n}         | ${2n}         | ${3n}         | ${2}
    ${4} | ${0n}         | ${1n}         | ${0n}         | ${100n}       | ${0}
    ${5} | ${0n}         | ${1n}         | ${228n}       | ${179n}       | ${1}
    ${6} | ${100n}       | ${3n}         | ${25n}        | ${6n}         | ${2}
    ${7} | ${999999999n} | ${300000000n} | ${666666666n} | ${100000000n} | ${2}
    ${8} | ${33n}        | ${15n}        | ${0n}         | ${84n}        | ${1}
  `('Base test: $n', ({ a, b, c, d, result }) => {
    expect(getCountOfOperations(a, b, c, d)).toBe(result);
  });
});
