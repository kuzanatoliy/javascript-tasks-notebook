const { getCountOfOperations } = require('./A');

describe('1736A. Make A Equal to B', () => {
  it.each`
    n    | arrA            | arrB            | result
    ${1} | ${[1, 0, 1]}    | ${[0, 0, 1]}    | ${1}
    ${2} | ${[1, 1, 0, 0]} | ${[0, 1, 1, 1]} | ${2}
    ${3} | ${[1, 1]}       | ${[1, 1]}       | ${0}
    ${4} | ${[1, 0, 0, 1]} | ${[0, 1, 1, 0]} | ${1}
    ${5} | ${[0]}          | ${[1]}          | ${1}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getCountOfOperations(arrA, arrB)).toBe(result);
  });
});
