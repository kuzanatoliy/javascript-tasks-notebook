const { getBetterPair } = require('./A');

describe('34A. Reconnaissance 2', () => {
  it.each`
    n    | array                   | result
    ${1} | ${[10, 12, 13, 15, 10]} | ${[1, 5]}
    ${2} | ${[10, 20, 30, 40]}     | ${[1, 2]}
  `('Base test: $n', ({ array, result }) => {
    expect(getBetterPair(array)).toStrictEqual(result);
  });
});
