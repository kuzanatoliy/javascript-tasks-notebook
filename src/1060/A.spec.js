const { getCountOfNums } = require('./A');

describe('1060A. Phone Numbers', () => {
  it.each`
    n    | snum                        | result
    ${1} | ${'00000000008'}            | ${1}
    ${2} | ${'0011223344556677889988'} | ${2}
    ${3} | ${'31415926535'}            | ${0}
  `('Base test: $n', ({ snum, result }) => {
    expect(getCountOfNums(snum)).toBe(result);
  });
});
