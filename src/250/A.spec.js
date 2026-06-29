const { getFoldersCount } = require('./A');

describe('250A. Paper Work', () => {
  it.each`
    n    | arr                                        | result
    ${1} | ${[1, 2, 3, -4, -5, -6, 5, -5, -6, -7, 6]} | ${[5, 3, 3]}
    ${2} | ${[0, -1, 100, -1, 0]}                     | ${[5]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getFoldersCount(arr)).toStrictEqual(result);
  });
});
