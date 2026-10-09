const { getDif } = require('./B');

describe('1700B. Palindromic Numbers', () => {
  it.each`
    n    | snum      | result
    ${1} | ${'99'}   | ${'12'}
    ${2} | ${'1023'} | ${'8976'}
    ${3} | ${'385'}  | ${'614'}
    ${4} | ${'90'}   | ${'21'}
  `('Base test: $n', ({ snum, result }) => {
    expect(getDif(snum)).toBe(result);
  });
});
