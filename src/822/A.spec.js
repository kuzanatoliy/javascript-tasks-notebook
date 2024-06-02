const { getGCD } = require('./A');

describe("822A. I'm bored with life", () => {
  it.each`
    n    | a    | b    | result
    ${1} | ${4} | ${3} | ${6}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getGCD(a, b)).toBe(result);
  });
});
