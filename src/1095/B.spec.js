const { getMinInstability } = require('./B');

describe('1095B. Array Stabilization', () => {
  it.each`
    n    | array           | result
    ${1} | ${[1, 3, 3, 7]} | ${2}
    ${2} | ${[1, 100000]}  | ${0}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinInstability(array)).toBe(result);
  });
});
