const { getRightNumber } = require('./A');

describe('1559A. Mocha and Math', () => {
  it.each`
    n    | array                | result
    ${1} | ${[1, 2]}            | ${0}
    ${2} | ${[1, 1, 3]}         | ${1}
    ${3} | ${[3, 11, 3, 7]}     | ${3}
    ${4} | ${[11, 7, 15, 3, 7]} | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getRightNumber(array)).toBe(result);
  });
});
