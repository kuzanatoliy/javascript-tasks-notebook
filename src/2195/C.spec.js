const { getOperationsCount } = require('./C');

describe('2195C. Dice Roll Sequence', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[1, 4, 2]}                      | ${0}
    ${2} | ${[3, 4, 6, 3]}                   | ${1}
    ${3} | ${[6, 1, 4, 3, 1, 3, 2, 5, 4, 4]} | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOperationsCount(arr)).toBe(result);
  });
});
