const { checkDominoPiling } = require('./A');

describe('50A. Domino piling', () => {
  it.each`
    n    | line | column | result
    ${1} | ${2} | ${4}   | ${4}
    ${2} | ${3} | ${3}   | ${4}
  `('Base test: $n', ({ line, column, result }) => {
    expect(checkDominoPiling(line, column)).toBe(result);
  });
});
