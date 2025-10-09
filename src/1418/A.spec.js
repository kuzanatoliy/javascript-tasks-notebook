const { getCountOfOperations } = require('./A');

describe('1418A. Buying Torches', () => {
  it.each`
    n    | x              | y              | k              | result
    ${1} | ${2n}          | ${1n}          | ${5n}          | ${14n}
    ${2} | ${42n}         | ${13n}         | ${24n}         | ${33n}
    ${3} | ${12n}         | ${11n}         | ${12n}         | ${25n}
    ${4} | ${1000000000n} | ${1000000000n} | ${1000000000n} | ${2000000003n}
    ${5} | ${2n}          | ${1000000000n} | ${1000000000n} | ${1000000001999999999n}
  `('Base test: $n', ({ x, y, k, result }) => {
    expect(getCountOfOperations(x, y, k)).toBe(result);
  });
});
