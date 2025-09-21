const { getMinCountOfUtensils } = require('./A');

describe('1032A. Kitchen Utensils', () => {
  it.each`
    n    | arr                                 | k    | result
    ${1} | ${[1, 2, 2, 1, 3]}                  | ${2} | ${1}
    ${2} | ${[1, 3, 3, 1, 3, 5, 5, 5, 5, 100]} | ${3} | ${14}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getMinCountOfUtensils(arr, k)).toBe(result);
  });
});
