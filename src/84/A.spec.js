const { getCountOfDieSolders } = require('./A');

describe('84A. Toy Army', () => {
  it.each`
    n    | num  | result
    ${1} | ${2} | ${3}
    ${2} | ${4} | ${6}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfDieSolders(num)).toBe(result);
  });
});
