const { getMinSum } = require('./A');

describe('389A. Fox and Number Game', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[1, 2]}               | ${2}
    ${2} | ${[2, 4, 6]}            | ${6}
    ${3} | ${[12, 18]}             | ${12}
    ${4} | ${[45, 12, 27, 30, 18]} | ${15}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinSum(arr)).toBe(result);
  });
});
