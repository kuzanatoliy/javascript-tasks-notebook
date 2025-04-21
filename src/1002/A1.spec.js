const { solve } = require('./A1');

describe('1002A1. Generate superposition of all basis states', () => {
  it.each`
    n    | prop | result
    ${1} | ${1} | ${2}
    ${2} | ${3} | ${2}
  `('Base test: $n', ({ prop, result }) => {
    expect(solve(prop)).toBe(result);
  });
});
