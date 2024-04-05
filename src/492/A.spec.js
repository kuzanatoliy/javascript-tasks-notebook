const { getLevels } = require('./A');

describe('492A. Vanya and Cubes', () => {
  it.each`
    n    | member | result
    ${1} | ${1}   | ${1}
    ${2} | ${25}  | ${4}
  `('Base test: $n', ({ member, result }) => {
    expect(getLevels(member)).toBe(result);
  });
});
