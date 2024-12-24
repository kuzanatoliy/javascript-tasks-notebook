const { getCountOfHappyDays } = require('./A');

describe('2047A. Alyona and a Square Jigsaw Puzzle', () => {
  it.each`
    n    | array                                                 | result
    ${1} | ${[1]}                                                | ${1}
    ${2} | ${[1, 8]}                                             | ${2}
    ${3} | ${[1, 3, 2, 1, 2]}                                    | ${2}
    ${4} | ${[1, 2, 1, 10, 2, 7, 2]}                             | ${2}
    ${5} | ${[1, 10, 10, 100, 1, 1, 10, 1, 10, 2, 10, 2, 10, 1]} | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfHappyDays(array)).toBe(result);
  });
});
