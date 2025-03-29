const { getNumberOfEmployees } = require('./A');

describe('935A. Fafa and his Company', () => {
  it.each`
    n    | number | result
    ${1} | ${2}   | ${1}
    ${2} | ${10}  | ${3}
  `('Base test: $n', ({ number, result }) => {
    expect(getNumberOfEmployees(number)).toBe(result);
  });
});
