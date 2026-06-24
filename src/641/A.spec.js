const { isInfinite } = require('./A');

describe('641A. Little Artem and Grasshopper', () => {
  it.each`
    n    | map      | arr          | result
    ${1} | ${'><'}  | ${[1, 2]}    | ${'FINITE'}
    ${2} | ${'>><'} | ${[2, 1, 1]} | ${'INFINITE'}
  `('Base test: $n', ({ map, arr, result }) => {
    expect(isInfinite(map, arr)).toBe(result);
  });
});
