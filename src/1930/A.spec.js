const { getMaxScore } = require('./A');

describe('1930A. Maximise The Score', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[2, 3]}             | ${2}
    ${2} | ${[1, 1, 2, 1]}       | ${2}
    ${3} | ${[1, 1, 1, 1, 1, 1]} | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxScore(array)).toBe(result);
  });
});
