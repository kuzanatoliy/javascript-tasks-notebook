const { getCountOfOperations } = require('./A');

describe('2025A. Two Screens', () => {
  it.each`
    n    | str1          | str2               | result
    ${1} | ${'GARAGE'}   | ${'GARAGEFORSALE'} | ${14}
    ${2} | ${'ABCDE'}    | ${'AABCD'}         | ${10}
    ${3} | ${'TRAINING'} | ${'DRAINING'}      | ${16}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getCountOfOperations(str1, str2)).toBe(result);
  });
});
