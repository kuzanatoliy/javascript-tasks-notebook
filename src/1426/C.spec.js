const { getMinOperationsCount } = require('./C');

describe('1426C. Increase and Copy', () => {
  it.each`
    n    | num           | result
    ${1} | ${1}          | ${0}
    ${2} | ${5}          | ${3}
    ${3} | ${42}         | ${11}
    ${4} | ${1337}       | ${72}
    ${5} | ${1000000000} | ${63244}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getMinOperationsCount(num, m)).toBe(result);
  });
});
