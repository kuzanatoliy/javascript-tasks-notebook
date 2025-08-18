const { getCountOfCleaning } = require('./A');

describe('369A. Valera and Plates', () => {
  it.each`
    n    | arr                         | p1   | p2   | result
    ${1} | ${[1, 2, 1]}                | ${1} | ${1} | ${1}
    ${2} | ${[1, 1, 1, 1]}             | ${3} | ${1} | ${1}
    ${3} | ${[2, 2, 2]}                | ${2} | ${2} | ${0}
    ${4} | ${[1, 2, 1, 2, 1, 2, 1, 2]} | ${2} | ${2} | ${4}
  `('Base test: $n', ({ arr, p1, p2, result }) => {
    expect(getCountOfCleaning(arr, p1, p2)).toBe(result);
  });
});
