const { getBorder } = require('./A');

describe('357A. Group of Students', () => {
  it.each`
    n    | arr                | x    | y     | result
    ${1} | ${[3, 4, 3, 2, 1]} | ${6} | ${8}  | ${3}
    ${2} | ${[0, 3, 3, 4, 2]} | ${3} | ${10} | ${3}
    ${3} | ${[2, 5]}          | ${3} | ${6}  | ${0}
  `('Base test: $n', ({ arr, x, y, result }) => {
    expect(getBorder(arr, x, y)).toBe(result);
  });
});
