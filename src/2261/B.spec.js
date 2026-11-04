const { getMaxDelicacy } = require('./B');

describe("2271B. What's the Capital of France?", () => {
  it.each`
    n    | arr          | result
    ${1} | ${[0]}       | ${0}
    ${2} | ${[1, 2]}    | ${3}
    ${3} | ${[4, 6]}    | ${7}
    ${4} | ${[8, 8, 8]} | ${8}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxDelicacy(arr)).toBe(result);
  });
});
