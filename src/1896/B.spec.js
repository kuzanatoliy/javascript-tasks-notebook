const { getCountOfOperations } = require('./B');

describe('1896B. AB Flipping', () => {
  it.each`
    n    | str       | result
    ${1} | ${'AB'}   | ${1}
    ${2} | ${'BBBA'} | ${0}
    ${3} | ${'AABB'} | ${3}
  `('Base test: $n', ({ str, result }) => {
    expect(getCountOfOperations(str)).toBe(result);
  });
});
