const { isGridExist } = require('./A');

describe('2122A. Greedy Grid', () => {
  it.each`
    n    | rows | cols | result
    ${1} | ${3} | ${3} | ${'YES'}
    ${2} | ${1} | ${2} | ${'NO'}
  `('Base test: $n', ({ rows, cols, result }) => {
    expect(isGridExist(rows, cols)).toBe(result);
  });
});
