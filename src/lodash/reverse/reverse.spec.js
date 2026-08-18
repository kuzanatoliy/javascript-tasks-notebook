const { reverse } = require('./reverse');

describe('Lodash: reverse function', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1, 2, 3]} | ${[3, 2, 1]}
  `('Base test: $n', ({ arr, result }) => {
    expect(reverse(arr)).toStrictEqual(result);
    expect(arr).toStrictEqual(result);
  });
});
