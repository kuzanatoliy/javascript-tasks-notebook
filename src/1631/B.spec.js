const { getOperationsCount } = require('./B');

describe('1631A. Min Max Swap', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 1, 1]}       | ${0}
    ${2} | ${[2, 1]}          | ${1}
    ${3} | ${[4, 4, 4, 2, 4]} | ${1}
    ${4} | ${[4, 2, 1, 3]}    | ${2}
    ${5} | ${[1]}             | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOperationsCount(arr)).toBe(result);
  });
});
