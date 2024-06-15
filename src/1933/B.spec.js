const { getCountOfOperations } = require('./B');

describe('1933B. Turtle Math: Fast Three Task', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[2, 2, 5, 4]}          | ${1}
    ${2} | ${[1, 3, 2]}             | ${0}
    ${3} | ${[3, 7, 6, 8]}          | ${0}
    ${4} | ${[1]}                   | ${1}
    ${5} | ${[2, 2, 4, 2]}          | ${1}
    ${6} | ${[5, 5]}                | ${2}
    ${7} | ${[2, 4, 8, 1, 9, 3, 4]} | ${1}
    ${8} | ${[4, 10]}               | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfOperations(array)).toBe(result);
  });
});
