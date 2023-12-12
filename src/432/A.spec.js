const { getBandsCount } = require('./A');

describe('432A. Choosing Teams', () => {
  it.each`
    n    | members               | count | result
    ${1} | ${[0, 4, 5, 1, 0]}    | ${2}  | ${1}
    ${2} | ${[0, 1, 2, 3, 4, 5]} | ${4}  | ${0}
    ${3} | ${[0, 0, 0, 0, 0, 0]} | ${5}  | ${2}
  `('Base test: $n', ({ members, count, result }) => {
    expect(getBandsCount(members, count)).toBe(result);
  });
});
