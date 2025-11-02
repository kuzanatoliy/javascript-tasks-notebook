const { getCountOfMatches } = require('./A');

describe('2155A. El fucho', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${2}
    ${2} | ${3} | ${4}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfMatches(num)).toBe(result);
  });
});
