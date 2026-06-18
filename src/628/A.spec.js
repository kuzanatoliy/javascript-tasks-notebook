const { getNeededCountStaff } = require('./A');

describe('628A. Tennis Tournament', () => {
  it.each`
    n    | num  | b    | p    | result
    ${1} | ${5} | ${2} | ${3} | ${[20, 15]}
    ${2} | ${8} | ${2} | ${4} | ${[35, 32]}
  `('Base test: $n', ({ num, b, p, result }) => {
    expect(getNeededCountStaff(num, b, p)).toStrictEqual(result);
  });
});
