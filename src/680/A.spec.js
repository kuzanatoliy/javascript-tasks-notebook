const { getMinSum } = require('./A');

describe('680A. Bear and Five Cards', () => {
  it.each`
    n    | numbers                 | result
    ${1} | ${[7, 3, 7, 3, 20]}     | ${26}
    ${2} | ${[7, 9, 3, 1, 8]}      | ${28}
    ${3} | ${[10, 10, 10, 10, 10]} | ${20}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getMinSum(numbers)).toBe(result);
  });
});
