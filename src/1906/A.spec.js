const { getLowestStr } = require('./A');

describe('1906A. Easy As ABC', () => {
  it.each`
    n    | str            | result
    ${1} | ${'BCBCACBCB'} | ${'ABC'}
    ${2} | ${'BCBCCCCCA'} | ${'ACB'}
    ${3} | ${'ACACBCACA'} | ${'ABA'}
    ${4} | ${'ACACACACA'} | ${'AAA'}
    ${5} | ${'CCCCBCCC'}  | ${'BCC'}
  `('Base test: $n', ({ str, result }) => {
    expect(getLowestStr(str)).toBe(result);
  });
});
