const { isValidConfiguration } = require('./B');

describe('2090B. Pushing Balls', () => {
  it.each`
    n    | grid                                 | result
    ${1} | ${[[0, 0, 1], [0, 0, 1], [1, 1, 0]]} | ${'YES'}
    ${2} | ${[[0, 1, 0], [1, 1, 1], [0, 1, 0]]} | ${'YES'}
    ${3} | ${[[1, 1, 1], [1, 1, 1], [1, 1, 1]]} | ${'YES'}
    ${4} | ${[[0, 0, 0], [0, 0, 0], [0, 0, 0]]} | ${'YES'}
    ${4} | ${[[0, 0, 0], [0, 0, 0], [0, 0, 1]]} | ${'NO'}
  `('Base test: $n', ({ grid, result }) => {
    expect(isValidConfiguration(grid)).toBe(result);
  });
});
