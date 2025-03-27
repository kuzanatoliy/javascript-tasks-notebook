const { transformArray } = require('./A');

describe('712A. Memory and Crow', () => {
  it.each`
    n    | arr                  | result
    ${1} | ${[6, -4, 8, -2, 3]} | ${[2, 4, 6, 1, 3]}
    ${2} | ${[3, -2, -1, 5, 6]} | ${[1, -3, 4, 11, 6]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformArray(arr)).toStrictEqual(result);
  });
});
