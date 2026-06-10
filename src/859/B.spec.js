const { getLength } = require('./B');

describe('859B. Lazy Security Guard', () => {
  it.each`
    n    | num   | result
    ${1} | ${4}  | ${8}
    ${2} | ${11} | ${14}
    ${3} | ${22} | ${20}
  `('Base test: $n', ({ num, result }) => {
    expect(getLength(num)).toBe(result);
  });
});
