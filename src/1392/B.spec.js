const { transformArray } = require('./B');

describe('1392A. Omkar and Password', () => {
  it.each`
    n    | arr                 | k     | result
    ${1} | ${[-199, 192]}      | ${1}  | ${[391, 0]}
    ${2} | ${[5, -1, 4, 2, 0]} | ${19} | ${[0, 6, 1, 3, 5]}
    ${2} | ${[69]}             | ${2}  | ${[0]}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(transformArray(arr, k)).toStrictEqual(result);
  });
});
