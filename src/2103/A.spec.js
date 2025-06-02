const { getSubsetLength } = require('./A');

describe('2103A. Common Multiple', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2, 3]}       | ${3}
    ${2} | ${[3, 1, 4, 1, 5]} | ${4}
    ${3} | ${[1]}             | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getSubsetLength(arr)).toBe(result);
  });
});
