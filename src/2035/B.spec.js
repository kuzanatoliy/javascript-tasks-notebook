const { getNumber } = require('./B');

describe('2035B. Everyone Loves Tres', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${'-1'}
    ${2} | ${2} | ${'66'}
    ${3} | ${3} | ${'-1'}
    ${4} | ${4} | ${'3366'}
    ${5} | ${5} | ${'36366'}
    ${6} | ${7} | ${'3336366'}
  `('Base test: $n', ({ num, result }) => {
    expect(getNumber(num)).toBe(result);
  });
});
