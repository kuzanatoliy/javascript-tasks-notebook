const { flattenDepth } = require('./flatten-depth');

describe('Lodash: flattenDepth function', () => {
  it.each`
    n    | arr                      | level | result
    ${1} | ${[1, [2, [3, [4]], 5]]} | ${1}  | ${[1, 2, [3, [4]], 5]}
    ${1} | ${[1, [2, [3, [4]], 5]]} | ${2}  | ${[1, 2, 3, [4], 5]}
  `('Base test: $n', ({ arr, level, result }) => {
    expect(flattenDepth(arr, level)).toStrictEqual(result);
  });
});
