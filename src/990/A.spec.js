const { getMinAmount } = require('./A');

describe('990A. A Blend of Springtime', () => {
  it.each`
    n    | num   | m    | a     | b     | result
    ${1} | ${9}  | ${7} | ${3}  | ${8}  | ${15}
    ${1} | ${2}  | ${7} | ${3}  | ${7}  | ${14}
    ${1} | ${30} | ${6} | ${17} | ${19} | ${0}
  `('Base test: $n', ({ num, m, a, b, result }) => {
    expect(getMinAmount(num, m, a, b)).toBe(result);
  });
});
