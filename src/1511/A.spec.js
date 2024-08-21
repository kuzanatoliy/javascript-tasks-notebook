const { getCountOfLikes } = require('./A');

describe('1511A. Review Site', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 2, 3]}       | ${2}
    ${2} | ${[1, 1, 1, 1, 1]} | ${5}
    ${3} | ${[3, 3, 2]}       | ${2}
    ${3} | ${[2]}             | ${0}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfLikes(array)).toBe(result);
  });
});
