const { transformArray } = require('./B');

describe('764A. Taymyr is calling you', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[4, 3, 7, 6, 9, 1, 2]}    | ${[2, 3, 9, 6, 7, 1, 4]}
    ${2} | ${[6, 1, 4, 2, 5, 6, 9, 2]} | ${[2, 1, 6, 2, 5, 4, 9, 6]}
  `('Base test: $n', ({ arr, result }) => {
    expect(transformArray(arr)).toStrictEqual(result);
  });
});
