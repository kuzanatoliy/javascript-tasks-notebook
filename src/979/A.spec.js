const { getNumberOfStraightCuts } = require('./A');

describe('979A. Pizza, Pizza, Pizza!!!', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${2}
    ${2} | ${4} | ${5}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumberOfStraightCuts(num)).toBe(result);
  });
});
