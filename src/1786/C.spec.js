const { getMinNumberOfTimes } = require('./C');

describe('1786C. Monsters (easy version)', () => {
  it.each`
    n    | monsters              | result
    ${1} | ${[3, 1, 2]}          | ${0}
    ${2} | ${[4, 1, 5, 4, 1, 1]} | ${4}
  `('Base test: $n', ({ monsters, result }) => {
    expect(getMinNumberOfTimes(monsters)).toBe(result);
  });
});
