const { getPossibleColor } = require('./A');

describe('1728A. Colored Balls: Revisited', () => {
  it.each`
    n    | array        | result
    ${1} | ${[1, 1, 1]} | ${1}
    ${2} | ${[9]}       | ${1}
    ${3} | ${[4, 7]}    | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getPossibleColor(array)).toBe(result);
  });
});
