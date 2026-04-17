const { check } = require('./A');

describe('122A. Lucky Division', () => {
  it.each`
    n    | num   | result
    ${1} | ${47} | ${true}
    ${2} | ${16} | ${true}
    ${2} | ${78} | ${false}
  `('Base test: $n', ({ num, result }) => {
    expect(check(num)).toBe(result);
  });
});
