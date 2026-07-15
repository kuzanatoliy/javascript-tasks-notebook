const { findD } = require('./C');

describe('1618C. Paint the Array', () => {
  it.each`
    n    | arr                                         | result
    ${1} | ${[1n, 2n, 3n, 4n, 5n]}                     | ${2n}
    ${2} | ${[10n, 5n, 15n]}                           | ${0n}
    ${3} | ${[100n, 10n, 200n]}                        | ${100n}
    ${4} | ${[9n, 8n, 2n, 6n, 6n, 2n, 8n, 6n, 5n, 4n]} | ${0n}
    ${5} | ${[1n, 3n]}                                 | ${3n}
  `('Base test: $n', ({ arr, result }) => {
    expect(findD(arr)).toStrictEqual(result);
  });
});
