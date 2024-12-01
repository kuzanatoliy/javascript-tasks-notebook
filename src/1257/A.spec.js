const { getDistance } = require('./A');

describe('1257A. Two Rival Students', () => {
  it.each`
    n    | num    | x      | a      | b      | result
    ${1} | ${5}   | ${1}   | ${3}   | ${2}   | ${2}
    ${2} | ${100} | ${33}  | ${100} | ${1}   | ${99}
    ${3} | ${6}   | ${0}   | ${2}   | ${3}   | ${1}
    ${4} | ${2}   | ${100} | ${1}   | ${2}   | ${1}
    ${5} | ${100} | ${98}  | ${99}  | ${100} | ${99}
  `('Base test: $n', ({ num, x, a, b, result }) => {
    expect(getDistance(num, x, a, b)).toBe(result);
  });
});
