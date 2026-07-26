const { findUniqueNumber } = require('./find-unique-number');

describe('findUniqueNumber', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[1, 1, 2, 2, 3, 4, 4]}          | ${3}
    ${2} | ${[1, 2, 2, 3, 4, 4, 5, 5]}       | ${1}
    ${3} | ${[1, 1, 2, 2, 3, 3, 4, 4, 5, 5]} | ${-1}
  `('Base test: $n', ({ arr, result }) => {
    expect(findUniqueNumber(arr)).toBe(result);
  });
});
