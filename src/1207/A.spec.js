const { getMaxIncome } = require('./A');

describe('1207A. There Are Two Types Of Burgers', () => {
  it.each`
    n    | b     | p      | f      | h      | c      | result
    ${1} | ${15} | ${2}   | ${3}   | ${5}   | ${10}  | ${40}
    ${2} | ${7}  | ${5}   | ${2}   | ${10}  | ${12}  | ${34}
    ${3} | ${1}  | ${100} | ${100} | ${100} | ${100} | ${0}
  `('Base test: $n', ({ b, p, f, h, c, result }) => {
    expect(getMaxIncome(b, p, f, h, c)).toStrictEqual(result);
  });
});
