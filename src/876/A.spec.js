const { getMinDistance } = require('./A');

describe('876A. Trip For Meal', () => {
  it.each`
    n    | num  | a    | b    | c    | result
    ${1} | ${3} | ${2} | ${3} | ${1} | ${3}
    ${2} | ${1} | ${2} | ${3} | ${5} | ${0}
  `('Base test: $n', ({ num, a, b, c, result }) => {
    expect(getMinDistance(num, a, b, c)).toBe(result);
  });
});
