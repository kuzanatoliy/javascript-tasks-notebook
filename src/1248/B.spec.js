const { getLargestDistance } = require('./B');

describe('1248B. Grow The Tree', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 2, 3]}    | ${'26'}
    ${2} | ${[1, 1, 2, 2]} | ${'20'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getLargestDistance(arr)).toBe(result);
  });
});
