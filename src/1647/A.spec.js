const { getPassword } = require('./A');

describe('1647A. Madoka and Math Dad', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${'1'}
    ${2} | ${2} | ${'2'}
    ${3} | ${3} | ${'21'}
    ${4} | ${4} | ${'121'}
    ${5} | ${5} | ${'212'}
  `('Base test: $n', ({ num, result }) => {
    expect(getPassword(num)).toBe(result);
  });
});
