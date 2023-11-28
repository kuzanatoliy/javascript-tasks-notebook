const { checkCountOfBills } = require('./A');

describe('996A. Hit the Lottery', () => {
  it.each`
    n    | letters       | result
    ${1} | ${125}        | ${3}
    ${2} | ${43}         | ${5}
    ${2} | ${1000000000} | ${10000000}
  `('Base test: $n', ({ letters, result }) => {
    expect(checkCountOfBills(letters)).toBe(result);
  });
});
