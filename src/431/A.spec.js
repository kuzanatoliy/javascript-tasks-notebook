const { getCountOfCalories } = require('./A');

describe('431A. Black Square', () => {
  it.each`
    n    | calories        | string      | result
    ${1} | ${[1, 2, 3, 4]} | ${'123214'} | ${13}
    ${2} | ${[1, 5, 3, 2]} | ${'11221'}  | ${13}
  `('Base test: $n', ({ calories, string, result }) => {
    expect(getCountOfCalories(calories, string)).toBe(result);
  });
});
