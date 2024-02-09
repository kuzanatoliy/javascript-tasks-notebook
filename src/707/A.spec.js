const { getHashTag } = require('./A');

describe("707A. Brain's Photos", () => {
  it.each`
    n    | matrix                                  | result
    ${1} | ${[['C', 'M'], ['Y', 'Y']]}             | ${'#Color'}
    ${2} | ${[['W', 'W'], ['W', 'W'], ['B', 'B']]} | ${'#Black&White'}
    ${3} | ${[['W']]}                              | ${'#Black&White'}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getHashTag(matrix)).toBe(result);
  });
});
