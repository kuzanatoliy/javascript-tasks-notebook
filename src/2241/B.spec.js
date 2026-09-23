const { getGoodNumber } = require('./B');

describe('2241B. Good times Good times', () => {
  it.each`
    n    | num     | result
    ${1} | ${8}    | ${11}
    ${2} | ${73}   | ${101}
    ${3} | ${299}  | ${1001}
    ${4} | ${6767} | ${10001}
  `('Base test: $n', ({ num, result }) => {
    expect(getGoodNumber(num)).toBe(result);
  });
});
