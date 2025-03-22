const { getCountOfSteps } = require('./A');

describe("620A. Professor GukiZ's Robot", () => {
  it.each`
    n    | x1   | y1   | x2   | y2   | result
    ${1} | ${0} | ${0} | ${4} | ${5} | ${5}
    ${2} | ${3} | ${4} | ${6} | ${1} | ${3}
  `('Base test: $n', ({ x1, y1, x2, y2, result }) => {
    expect(getCountOfSteps(x1, y1, x2, y2)).toBe(result);
  });
});
