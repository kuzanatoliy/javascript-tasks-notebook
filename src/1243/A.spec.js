const { getMaxSquare } = require('./A');

describe('1243A. Maximum Square', () => {
  it.each`
    n    | array              | result
    ${1} | ${[4, 3, 1, 4, 5]} | ${3}
    ${2} | ${[4, 4, 4, 4]}    | ${4}
    ${3} | ${[1, 1, 1]}       | ${1}
    ${4} | ${[5, 5, 1, 1, 5]} | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxSquare(array)).toBe(result);
  });
});
