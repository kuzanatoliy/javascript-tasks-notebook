const { getMinCountOfPairs } = require('./A');

describe('1717A. Madoka and Strange Thoughts', () => {
  it.each`
    n    | num          | result
    ${1} | ${1}         | ${1}
    ${2} | ${2}         | ${4}
    ${3} | ${3}         | ${7}
    ${4} | ${4}         | ${10}
    ${5} | ${5}         | ${11}
    ${6} | ${100000000} | ${266666666}
  `('Base test: $n', ({ num, result }) => {
    expect(getMinCountOfPairs(num)).toBe(result);
  });
});
