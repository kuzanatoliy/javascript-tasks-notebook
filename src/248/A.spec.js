const { getCountOfOperations } = require('./A');

describe('248A. Boy or Girl', () => {
  it.each`
    n    | doorMap                                     | result
    ${1} | ${[[0, 1], [1, 0], [0, 1], [1, 1], [0, 1]]} | ${3}
  `('Base test: $n', ({ doorMap, result }) => {
    expect(getCountOfOperations(doorMap)).toBe(result);
  });
});
