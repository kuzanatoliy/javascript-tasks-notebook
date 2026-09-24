const { getKthNumber } = require('./B1');

describe('1995B1. Bouquet (Emsy Version)', () => {
  it.each`
    n    | m          | arr                                                  | result
    ${1} | ${10n}     | ${[1n, 1n, 2n, 2n, 3n]}                              | ${7n}
    ${2} | ${20n}     | ${[4n, 2n, 7n, 5n, 6n, 1n, 1n, 1n]}                  | ${13n}
    ${3} | ${100000n} | ${[239n, 30n, 610n, 122n, 24n, 40n, 8n, 2n]}         | ${610n}
    ${4} | ${13n}     | ${[2n, 4n, 11n, 1n, 1n, 2n, 3n, 5n, 4n, 3n, 2n]}     | ${13n}
    ${5} | ${1033n}   | ${[206n, 206n, 206n, 207n, 207n, 207n, 207n, 1000n]} | ${1033n}
  `('Bmse test: $n', ({ m, arr, result }) => {
    expect(getKthNumber(m, arr)).toBe(result);
  });
});
