const { getMaxCountOfPlayers } = require('./A');

describe('950A. Left-handers, Right-handers and Ambidexters', () => {
  it.each`
    n    | left | right | double | result
    ${1} | ${1} | ${4}  | ${2}   | ${6}
    ${2} | ${5} | ${5}  | ${5}   | ${14}
    ${3} | ${0} | ${2}  | ${0}   | ${0}
  `('Base test: $n', ({ left, right, double, result }) => {
    expect(getMaxCountOfPlayers(left, right, double)).toBe(result);
  });
});
