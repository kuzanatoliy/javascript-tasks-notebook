const { getCountOfOperations } = require('./A');

describe('267A. Subtractions', () => {
  it.each`
    n    | num1 | num2         | result
    ${1} | ${4} | ${17}        | ${8}
    ${2} | ${7} | ${987654321} | ${141093479}
  `('Base test: $n', ({ num1, num2, result }) => {
    expect(getCountOfOperations(num1, num2)).toBe(result);
  });
});
