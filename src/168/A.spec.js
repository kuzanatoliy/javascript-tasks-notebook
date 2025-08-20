const { getCountOfClones } = require('./A');

describe('168A. Wizards and Demonstration', () => {
  it.each`
    n    | num     | x      | y      | result
    ${1} | ${10}   | ${1}   | ${14}  | ${1}
    ${2} | ${20}   | ${10}  | ${50}  | ${0}
    ${3} | ${1000} | ${352} | ${146} | ${1108}
  `('Base test: $n', ({ num, x, y, result }) => {
    expect(getCountOfClones(num, x, y)).toBe(result);
  });
});
