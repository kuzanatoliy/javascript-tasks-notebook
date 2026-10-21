const { getItemsCount } = require('./B');

describe('2086B. Large Array and Segments', () => {
  it.each`
    n    | k          | x                 | arr                                                                                       | result
    ${1} | ${3n}      | ${10n}            | ${[3n, 4n, 2n, 1n, 5n]}                                                                   | ${12n}
    ${2} | ${97623n}  | ${1300111n}       | ${[105n, 95n, 108n, 111n, 118n, 101n, 95n, 118n, 97n, 108n, 111n, 114n, 97n, 110n, 116n]} | ${1452188n}
    ${3} | ${100000n} | ${1234567891011n} | ${[1n]}                                                                                   | ${0n}
    ${4} | ${1n}      | ${1n}             | ${[1n]}                                                                                   | ${1n}
    ${5} | ${1n}      | ${1n}             | ${[2n]}                                                                                   | ${1n}
    ${6} | ${1n}      | ${2n}             | ${[1n, 1n]}                                                                               | ${1n}
    ${7} | ${1n}      | ${5n}             | ${[2n, 1n]}                                                                               | ${0n}
    ${8} | ${2n}      | ${1n}             | ${[1n]}                                                                                   | ${2n}
  `('Base test: $n', ({ k, x, arr, result }) => {
    expect(getItemsCount(k, x, arr)).toBe(result);
  });
});
