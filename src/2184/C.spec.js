const { getMinTime } = require('./C');

describe('2184C. Huge Pile', () => {
  it.each`
    n    | num           | k    | result
    ${1} | ${10}         | ${3} | ${2}
    ${2} | ${11}         | ${5} | ${1}
    ${3} | ${21}         | ${4} | ${-1}
    ${4} | ${1000000000} | ${1} | ${29}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getMinTime(num, k)).toBe(result);
  });
});
