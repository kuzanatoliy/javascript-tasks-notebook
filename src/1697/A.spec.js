const { getCountOfRestoredPower } = require('./A');

describe('1697A. Parkway Walk', () => {
  it.each`
    n    | array              | power | result
    ${1} | ${[1, 2, 1]}       | ${1}  | ${3}
    ${2} | ${[3, 3, 5, 2]}    | ${5}  | ${8}
    ${3} | ${[1, 2, 3, 4, 5]} | ${16} | ${0}
  `('Base test: $n', ({ array, power, result }) => {
    expect(getCountOfRestoredPower(array, power)).toBe(result);
  });
});
