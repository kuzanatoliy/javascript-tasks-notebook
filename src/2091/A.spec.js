const { getStep } = require('./A');

describe('2091A. Olympiad Date', () => {
  it.each`
    n    | arr                                                 | result
    ${1} | ${[2, 0, 1, 2, 3, 2, 5, 0, 0, 1]}                   | ${9}
    ${2} | ${[2, 0, 1, 2, 3, 2, 5, 0]}                         | ${0}
    ${3} | ${[2, 0, 1, 0, 3, 2, 5, 0]}                         | ${8}
    ${4} | ${[2, 3, 1, 2, 3, 0, 1, 9, 2, 1, 0, 3, 5, 4, 0, 3]} | ${15}
  `('Base test: $n', ({ arr, result }) => {
    expect(getStep(arr)).toBe(result);
  });
});
