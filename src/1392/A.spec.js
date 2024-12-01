const { getShortestLength } = require('./A');

describe('1392A. Omkar and Password', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[2, 1, 3, 1]} | ${1}
    ${2} | ${[420, 420]}   | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getShortestLength(arr)).toStrictEqual(result);
  });
});
