const { getMinNumberOfDays } = require('./A');

describe('698A. Vacations', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[1, 3, 2, 0]}          | ${2}
    ${2} | ${[1, 3, 3, 2, 1, 2, 3]} | ${0}
    ${3} | ${[2, 2]}                | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinNumberOfDays(array)).toStrictEqual(result);
  });
});
