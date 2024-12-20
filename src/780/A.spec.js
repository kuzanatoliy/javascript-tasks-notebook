const { getCountOfSocks } = require('./A');

describe('780A. Andryusha and Socks', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 1]}             | ${1}
    ${2} | ${[2, 1, 1, 3, 2, 3]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSocks(arr)).toBe(result);
  });
});
