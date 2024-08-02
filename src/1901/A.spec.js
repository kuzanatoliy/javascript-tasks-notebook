const { getMinVolume } = require('./A');

describe('1901A. Line Trip', () => {
  it.each`
    n    | array        | x     | result
    ${1} | ${[1, 2, 5]} | ${7}  | ${4}
    ${2} | ${[1, 2, 5]} | ${6}  | ${3}
    ${3} | ${[7]}       | ${10} | ${7}
  `('Base test: $n', ({ array, x, result }) => {
    expect(getMinVolume(array, x)).toBe(result);
  });
});
