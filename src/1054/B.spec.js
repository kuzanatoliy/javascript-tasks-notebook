const { getBrokenStep } = require('./B');

describe('1054B. Appending Mex', () => {
  it.each`
    n    | arr               | result
    ${1} | ${[0, 1, 2, 1]}   | ${-1}
    ${2} | ${[1, 0, 1]}      | ${1}
    ${3} | ${[0, 1, 2, 239]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getBrokenStep(arr)).toBe(result);
  });
});
