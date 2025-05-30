const { getMod } = require('./A');

describe('913A. Modular Exponentiation', () => {
  it.each`
    n    | num         | m           | result
    ${1} | ${4}        | ${42}       | ${10}
    ${2} | ${1}        | ${58}       | ${0}
    ${3} | ${98765432} | ${23456789} | ${23456789}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getMod(num, m)).toBe(result);
  });
});
