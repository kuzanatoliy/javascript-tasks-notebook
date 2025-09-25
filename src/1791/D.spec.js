const { getMaxSum } = require('./D');

describe('1791D. Distinct Split', () => {
  it.each`
    n    | str             | result
    ${1} | ${'aa'}         | ${2}
    ${2} | ${'abcabcd'}    | ${7}
    ${3} | ${'aaaaa'}      | ${2}
    ${4} | ${'paiumoment'} | ${10}
    ${5} | ${'aazz'}       | ${3}
  `('Base test: $n', ({ str, result }) => {
    expect(getMaxSum(str)).toBe(result);
  });
});
