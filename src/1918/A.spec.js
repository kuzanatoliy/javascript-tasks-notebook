const { getMaxStability } = require('./A');

describe('1918A. Brick Wall', () => {
  it.each`
    n    | num      | m        | result
    ${1} | ${2}     | ${2}     | ${2}
    ${2} | ${7}     | ${8}     | ${28}
    ${3} | ${16}    | ${9}     | ${64}
    ${4} | ${3}     | ${5}     | ${6}
    ${5} | ${10000} | ${10000} | ${50000000}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getMaxStability(num, m)).toBe(result);
  });
});
