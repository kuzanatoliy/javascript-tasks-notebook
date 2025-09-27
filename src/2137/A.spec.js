const { getInitValue } = require('./A');

describe('2137A. Collatz Conjecture', () => {
  it.each`
    n    | k    | x    | result
    ${1} | ${1} | ${4} | ${8}
    ${2} | ${1} | ${5} | ${10}
    ${3} | ${5} | ${4} | ${128}
  `('Base test: $n', ({ k, x, result }) => {
    expect(getInitValue(k, x)).toBe(result);
  });
});
