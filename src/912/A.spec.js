const { getCountOfCrystals } = require('./A');

describe('912A. Tricky Alchemy', () => {
  it.each`
    n    | A           | B           | x           | y             | z           | result
    ${1} | ${4}        | ${3}        | ${2}        | ${1}          | ${1}        | ${2}
    ${2} | ${3}        | ${9}        | ${1}        | ${1}          | ${3}        | ${1}
    ${3} | ${12345678} | ${87654321} | ${43043751} | ${1000000000} | ${53798715} | ${2147483648}
  `('Base test: $n', ({ A, B, x, y, z, result }) => {
    expect(getCountOfCrystals(A, B, x, y, z)).toBe(result);
  });
});
