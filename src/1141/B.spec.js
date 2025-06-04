const { getMaxWorkingPeriod } = require('./B');

describe('1141B. Maximal Continuous Rest', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[1, 0, 1, 0, 1]}       | ${2}
    ${2} | ${[0, 1, 0, 1, 1, 0]}    | ${2}
    ${3} | ${[1, 0, 1, 1, 1, 0, 1]} | ${3}
    ${4} | ${[0, 0, 0]}             | ${0}
  `('Base test: $n', ({ array, result }) => {
    expect(getMaxWorkingPeriod(array)).toBe(result);
  });
});
