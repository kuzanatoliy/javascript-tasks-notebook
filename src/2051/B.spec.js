const { getCountOfDays } = require('./B');

describe('2051B. Journey', () => {
  it.each`
    n    | num           | a    | b    | c    | result
    ${1} | ${12}         | ${1} | ${5} | ${3} | ${5}
    ${2} | ${6}          | ${6} | ${7} | ${4} | ${1}
    ${3} | ${16}         | ${3} | ${4} | ${1} | ${6}
    ${4} | ${1000000000} | ${1} | ${1} | ${1} | ${1000000000}
  `('Base test: $n', ({ num, a, b, c, result }) => {
    expect(getCountOfDays(num, a, b, c)).toBe(result);
  });
});
