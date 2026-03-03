const { getMinLength } = require('./A');

describe("2179A. Little Fairy's Painting", () => {
  it.each`
    n    | x    | k    | result
    ${1} | ${2} | ${1} | ${3}
    ${2} | ${3} | ${2} | ${7}
    ${3} | ${1} | ${5} | ${6}
  `('Base test: $n', ({ x, k, result }) => {
    expect(getMinLength(x, k)).toBe(result);
  });
});
