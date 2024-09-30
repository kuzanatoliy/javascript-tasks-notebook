const { getMaxLength } = require('./A');

describe('1748A. The Ultimate Square', () => {
  it.each`
    n    | num          | result
    ${1} | ${2}         | ${1}
    ${2} | ${5}         | ${3}
    ${3} | ${197654321} | ${98827161}
  `('Base test: $n', ({ num, result }) => {
    expect(getMaxLength(num)).toBe(result);
  });
});
