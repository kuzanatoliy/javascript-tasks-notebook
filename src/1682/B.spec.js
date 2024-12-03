const { getMaxValue } = require('./B');

describe('1682B. AND Sorting', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[0, 1, 3, 2]}          | ${2}
    ${2} | ${[1, 0]}                | ${0}
    ${3} | ${[0, 1, 2, 3, 5, 6, 4]} | ${4}
    ${4} | ${[0, 3, 2, 1, 4]}       | ${1}
    ${5} | ${[0, 2, 1]}             | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxValue(arr)).toBe(result);
  });
});
