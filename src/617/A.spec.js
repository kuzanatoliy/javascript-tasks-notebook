const { checkMinStepCount } = require('./A');

describe('617A. Elephant', () => {
  it.each`
    n    | number | result
    ${1} | ${5}   | ${1}
    ${2} | ${12}  | ${3}
  `('Base test: $n', ({ number, result }) => {
    expect(checkMinStepCount(number)).toBe(result);
  });
});
