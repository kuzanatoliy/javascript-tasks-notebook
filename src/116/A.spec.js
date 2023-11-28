const { checkTramCapacity } = require('./A');

describe('116A. Tram', () => {
  it.each`
    n    | plan                                | result
    ${1} | ${[[0, 3], [2, 5], [4, 2], [4, 0]]} | ${6}
  `('Base test: $n', ({ plan, result }) => {
    expect(checkTramCapacity(plan)).toBe(result);
  });
});
