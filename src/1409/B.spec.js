const { getMinimumProducts } = require('./B');

describe('1409A. Yet Another Two Integers Problem', () => {
  it.each`
    n    | numbers                                            | result
    ${1} | ${[10n, 10n, 8n, 5n, 3n]}                          | ${70n}
    ${2} | ${[12n, 8n, 8n, 7n, 2n]}                           | ${77n}
    ${3} | ${[12343n, 43n, 4543n, 39n, 123212n]}              | ${177177n}
    ${4} | ${[1000000000n, 1000000000n, 1n, 1n, 1n]}          | ${999999999000000000n}
    ${5} | ${[1000000000n, 1000000000n, 1n, 1n, 1000000000n]} | ${999999999n}
    ${6} | ${[10n, 11n, 2n, 1n, 5n]}                          | ${55n}
    ${7} | ${[10n, 11n, 9n, 1n, 10n]}                         | ${10n}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getMinimumProducts(numbers)).toBe(result);
  });
});
