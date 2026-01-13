const { reorderArray } = require('./D2');

describe("1419D2. Sage's Birthday (hard version)", () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, 3, 2, 2, 4, 5, 4]} | ${[3, [3, 1, 4, 2, 4, 2, 5]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(reorderArray(arr)).toStrictEqual(result);
  });
});
