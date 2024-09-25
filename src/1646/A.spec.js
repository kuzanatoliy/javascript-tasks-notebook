const { getCount } = require('./A');

describe('1646A. Doors and Keys', () => {
  it.each`
    n    | num  | sum   | result
    ${1} | ${7} | ${0}  | ${0}
    ${2} | ${1} | ${1}  | ${1}
    ${3} | ${2} | ${12} | ${3}
    ${4} | ${3} | ${12} | ${1}
  `('Base test: $n', ({ num, sum, result }) => {
    expect(getCount(num, sum)).toBe(result);
  });
});
