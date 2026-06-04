const { flattenDeep } = require('./flatten-deep');

describe('Lodash: flattenDeep function', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, [2, [3, [4]], 5]]} | ${[1, 2, 3, 4, 5]}
  `('Base test: $n', ({ arr, size, result }) => {
    expect(flattenDeep(arr, size)).toStrictEqual(result);
  });
});
