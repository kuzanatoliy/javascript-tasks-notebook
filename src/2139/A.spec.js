const { getCountOfOperations } = require('./A');

describe('2139A. Maple and Multiplication', () => {
  it.each`
    n    | a       | b       | result
    ${1} | ${1}    | ${2}    | ${1}
    ${2} | ${10}   | ${3}    | ${2}
    ${3} | ${1000} | ${1000} | ${0}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfOperations(a, b)).toBe(result);
  });
});
