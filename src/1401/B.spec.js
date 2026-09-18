const { getMaxSum } = require('./B');

describe('1401A. Distance and Axis', () => {
  it.each`
    n    | x1   | y1   | z1   | x2   | y2   | z2   | result
    ${1} | ${2} | ${3} | ${2} | ${3} | ${3} | ${1} | ${4}
    ${2} | ${4} | ${0} | ${1} | ${2} | ${3} | ${0} | ${2}
    ${3} | ${0} | ${0} | ${1} | ${0} | ${0} | ${1} | ${0}
  `('Base test: $n', ({ x1, y1, z1, x2, y2, z2, result }) => {
    expect(getMaxSum(x1, y1, z1, x2, y2, z2)).toBe(result);
  });
});
