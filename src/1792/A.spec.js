const { getCountOfActions } = require('./A');

describe('1792A. GamingForces', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 2, 1, 2]}    | ${3}
    ${2} | ${[2, 4, 2]}       | ${3}
    ${3} | ${[1, 2, 3, 4, 5]} | ${5}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfActions(array)).toBe(result);
  });
});
