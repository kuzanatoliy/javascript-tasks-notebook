const { getEquality } = require('./A');

describe('616A. Comparing Two Long Integers', () => {
  it.each`
    n    | snum1         | snum2      | result
    ${1} | ${'9'}        | ${'10'}    | ${'<'}
    ${2} | ${'11'}       | ${'10'}    | ${'>'}
    ${2} | ${'00012345'} | ${'12345'} | ${'='}
    ${2} | ${'0123'}     | ${'9'}     | ${'>'}
    ${2} | ${'0123'}     | ${'111'}   | ${'>'}
  `('Base test: $n', ({ snum1, snum2, result }) => {
    expect(getEquality(snum1, snum2)).toBe(result);
  });
});
