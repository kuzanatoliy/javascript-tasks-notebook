const { getMinValue } = require('./B');

describe('1806B. Mex Master', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[0, 0]}                   | ${1}
    ${2} | ${[0, 0, 1]}                | ${0}
    ${3} | ${[1, 0, 0, 0, 2, 0, 3, 0]} | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinValue(arr)).toBe(result);
  });
});
