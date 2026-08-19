const { getBoxesCount } = require('./get-boxes-count');

describe('getBoxesCount', () => {
  it.each`
    n    | arr                                 | volume | result
    ${1} | ${[1, 3, 2, 4, 10, 8, 4, 2, 5, 3]}  | ${12}  | ${4}
    ${2} | ${[1, 3, 2, 4, 10, 8, 4, 2, 14, 3]} | ${12}  | ${-1}
  `('Base test: $n', ({ arr, volume, result }) => {
    expect(getBoxesCount(arr, volume)).toBe(result);
  });
});
