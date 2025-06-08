const { getMaxEvenSum } = require('./A');

describe("621A. Professor GukiZ's Robot", () => {
  it.each`
    n    | arr                                                        | result
    ${1} | ${[1, 2, 3]}                                               | ${6}
    ${2} | ${[999999999, 999999999, 999999999, 999999999, 999999999]} | ${3999999996}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxEvenSum(arr)).toBe(result);
  });
});
