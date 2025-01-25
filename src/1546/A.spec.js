const { getCountOfOperations } = require('./A');

describe('1546A. AquaMoon and Two Arrays', () => {
  it.each`
    n    | arrA               | arrB               | result
    ${1} | ${[1, 2, 3, 4]}    | ${[3, 1, 2, 4]}    | ${[2, [[2, 1], [3, 1]]]}
    ${2} | ${[1, 3]}          | ${[2, 1]}          | ${[-1]}
    ${3} | ${[0]}             | ${[0]}             | ${[0]}
    ${4} | ${[4, 3, 2, 1, 0]} | ${[0, 1, 2, 3, 4]} | ${[6, [[1, 4], [1, 4], [1, 5], [1, 5], [2, 5], [2, 5]]]}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getCountOfOperations(arrA, arrB)).toStrictEqual(result);
  });
});
