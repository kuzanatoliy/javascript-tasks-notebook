const { getMinimumPossiblePenalty } = require('./C');

describe('1919C. Grouping Increases', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[1, 2, 3, 4, 5]}          | ${3}
    ${2} | ${[8, 2, 3, 1, 1, 7, 4, 3]} | ${1}
    ${3} | ${[3, 3, 3, 3, 3]}          | ${0}
    ${4} | ${[1]}                      | ${0}
    ${5} | ${[2, 1]}                   | ${0}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinimumPossiblePenalty(array)).toBe(result);
  });
});
