const { getMaxValueInTheTable } = require('./A');

describe('509A. Maximum in Table', () => {
  it.each`
    n    | number | result
    ${1} | ${1}   | ${1}
    ${2} | ${5}   | ${70}
  `('Base test: $n', ({ number, result }) => {
    expect(getMaxValueInTheTable(number)).toBe(result);
  });
});
