const { zSort } = require('./B');

describe('650B. z-sort', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2, 2, 1]}    | ${[1, 2, 1, 2]}
    ${2} | ${[1, 3, 2, 2, 5]} | ${[1, 5, 2, 3, 2]}
  `('Base test: $n', ({ arr, result }) => {
    expect(zSort(arr)).toStrictEqual(result);
  });
});
