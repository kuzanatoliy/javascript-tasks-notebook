const { getMinCost } = require('./A');

describe('804A. Find Amir', () => {
  it.each`
    n    | num   | result
    ${1} | ${2}  | ${0}
    ${2} | ${10} | ${4}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinCost(num)).toBe(result);
  });
});
