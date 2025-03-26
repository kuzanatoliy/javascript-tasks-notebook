const { getCountOfMoney } = require('./A');

describe('1050A. Stock Arbitraging', () => {
  it.each`
    n    | arr1         | arr2            | r     | result
    ${1} | ${[4, 2, 5]} | ${[4, 4, 5, 4]} | ${11} | ${26}
    ${2} | ${[5, 7]}    | ${[4, 2]}       | ${50} | ${50}
  `('Base test: $n', ({ arr1, arr2, r, result }) => {
    expect(getCountOfMoney(arr1, arr2, r)).toStrictEqual(result);
  });
});
