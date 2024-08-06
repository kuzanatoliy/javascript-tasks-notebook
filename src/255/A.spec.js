const { getSums } = require('./A');

describe("255A. Greg's Workout", () => {
  it.each`
    n    | array                    | result
    ${1} | ${[2, 8]}                | ${'biceps'}
    ${2} | ${[5, 1, 10]}            | ${'back'}
    ${3} | ${[3, 3, 2, 7, 9, 6, 8]} | ${'chest'}
  `('Base test: $n', ({ array, result }) => {
    expect(getSums(array)).toBe(result);
  });
});
