const { flatten } = require('./flatten');

describe('Lodash: flatten function', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, [2, [3, [4]], 5]]} | ${[1, 2, [3, [4]], 5]}
  `('Base test: $n', ({ arr, result }) => {
    expect(flatten(arr)).toStrictEqual(result);
  });
});
