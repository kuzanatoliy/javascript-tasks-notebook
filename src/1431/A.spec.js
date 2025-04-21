const { getMaxAmount } = require('./A');

describe('1431A. Selling Hamburgers', () => {
  it.each`
    n    | array                               | result
    ${1} | ${[1, 1, 1]}                        | ${3}
    ${2} | ${[4, 1, 1]}                        | ${4}
    ${3} | ${[2, 4, 2]}                        | ${6}
    ${4} | ${[1, 2, 3, 4, 5, 6, 7, 8]}         | ${20}
    ${5} | ${[1000000000000]}                  | ${1000000000000}
    ${6} | ${[1000000000000, 999999999999, 1]} | ${1999999999998}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxAmount(array)).toBe(result);
  });
});
