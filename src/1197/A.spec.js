const { getCountOfSteps } = require('./A');

describe('1197A. DIY Wooden Ladder', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 3, 1, 3]}    | ${2}
    ${2} | ${[3, 3, 2]}       | ${1}
    ${3} | ${[2, 3, 3, 4, 2]} | ${2}
    ${4} | ${[1, 1, 2]}       | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSteps(arr)).toBe(result);
  });
});
