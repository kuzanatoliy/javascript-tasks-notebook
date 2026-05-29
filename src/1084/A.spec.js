const { getMinElectricityCount } = require('./A');

describe('1084A. The Fair Nut and Elevator', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[0, 2, 1]} | ${16}
    ${2} | ${[1, 1]}    | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinElectricityCount(arr)).toBe(result);
  });
});
