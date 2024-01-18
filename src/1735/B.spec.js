const { getMinNumberOfSteps } = require('./B');

describe('1730B. Tea with Tangerines', () => {
  it.each`
    n    | numbers                         | result
    ${1} | ${[1, 2, 3, 4, 5]}              | ${10}
    ${2} | ${[1033]}                       | ${0}
    ${3} | ${[600, 900, 1300, 2000, 2550]} | ${4}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getMinNumberOfSteps(numbers)).toBe(result);
  });
});
