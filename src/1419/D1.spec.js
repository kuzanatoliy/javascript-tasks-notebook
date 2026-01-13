const { reorderArray } = require('./D1');

describe("1419D1. Sage's Birthday (easy version)", () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2, 3, 4, 5]} | ${[2, [3, 1, 4, 2, 5]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(reorderArray(arr)).toStrictEqual(result);
  });
});
