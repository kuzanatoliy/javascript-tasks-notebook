const { getNumberOfFloor } = require('./A');

describe('1426A. Floor Number', () => {
  it.each`
    n    | number | count | result
    ${1} | ${7}   | ${3}  | ${3}
    ${2} | ${1}   | ${5}  | ${1}
    ${3} | ${22}  | ${5}  | ${5}
    ${4} | ${987} | ${13} | ${77}
  `('Base test: $n', ({ number, count, result }) => {
    expect(getNumberOfFloor(number, count)).toBe(result);
  });
});
