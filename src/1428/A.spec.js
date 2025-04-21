const { getCountOfSteps } = require('./A');

describe('1428A. Box is Pull', () => {
  it.each`
    n    | x1   | y1   | x2   | y2   | result
    ${1} | ${1} | ${2} | ${2} | ${2} | ${1}
    ${2} | ${1} | ${1} | ${2} | ${2} | ${4}
  `('Base test: $n', ({ x1, y1, x2, y2, result }) => {
    expect(getCountOfSteps(x1, y1, x2, y2)).toBe(result);
  });
});
