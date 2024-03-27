const { getSatisfyingArray } = require('./A');

describe('1512A. Mean Inequality', () => {
  it.each`
    n    | array                  | result
    ${1} | ${[1, 2, 3, 4, 5, 6]}  | ${[1, 4, 2, 5, 3, 6]}
    ${2} | ${[123, 456, 789, 10]} | ${[10, 456, 123, 789]}
    ${3} | ${[6, 9]}              | ${[6, 9]}
  `('Base test: $n', ({ array, result }) => {
    expect(getSatisfyingArray(array)).toStrictEqual(result);
  });
});
