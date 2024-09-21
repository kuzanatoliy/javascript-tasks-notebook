const { getCountOfSteps } = require('./A');

describe('1806A. Walking Master', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[-1, 0, -1, 2]}  | ${4}
    ${2} | ${[0, 0, 4, 5]}    | ${6}
    ${3} | ${[-2, -1, 1, 1]}  | ${-1}
    ${4} | ${[-3, 2, -3, 2]}  | ${0}
    ${5} | ${[2, -1, -1, -1]} | ${3}
    ${6} | ${[1, 1, 0, 2]}    | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfSteps(arr)).toBe(result);
  });
});
