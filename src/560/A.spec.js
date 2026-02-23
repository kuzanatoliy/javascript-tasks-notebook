const { getMinUnfortunateSum } = require('./A');

describe('560A. Currency System in Geraldion', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2, 3, 4, 5]} | ${-1}
    ${2} | ${[2, 3]}          | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinUnfortunateSum(arr)).toBe(result);
  });
});
