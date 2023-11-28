const { checkCountOfCombination } = require('./B');

describe('268B. Buttons', () => {
  it.each`
    n    | buttonsCount | result
    ${1} | ${2}         | ${3}
    ${2} | ${3}         | ${7}
  `('Base test: $n', ({ buttonsCount, result }) => {
    expect(checkCountOfCombination(buttonsCount)).toBe(result);
  });
});
