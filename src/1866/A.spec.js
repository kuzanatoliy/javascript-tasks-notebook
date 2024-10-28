const { getCountOfOperations } = require('./A');

describe('1866A. Ambitious Kid', () => {
  it.each`
    n    | num                 | result
    ${1} | ${[2, -6, 5]}       | ${2}
    ${2} | ${[-3]}             | ${3}
    ${3} | ${[0, -1, 0, 1, 0]} | ${0}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfOperations(num)).toBe(result);
  });
});
