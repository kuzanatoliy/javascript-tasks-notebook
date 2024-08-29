const { getCountOfWinners } = require('./A');

describe('1487A. Arena', () => {
  it.each`
    n    | array           | result
    ${1} | ${[3, 2, 2]}    | ${1}
    ${2} | ${[5, 5]}       | ${0}
    ${3} | ${[1, 3, 3, 7]} | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfWinners(array)).toBe(result);
  });
});
