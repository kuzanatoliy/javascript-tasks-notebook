const { getCountOfIterations } = require('./A');

describe('2131A. Lever', () => {
  it.each`
    n    | arrA                  | arrB                  | result
    ${1} | ${[7, 3]}             | ${[5, 6]}             | ${3}
    ${2} | ${[3, 1, 4]}          | ${[3, 1, 4]}          | ${1}
    ${3} | ${[10]}               | ${[1]}                | ${10}
    ${4} | ${[1, 1, 4, 5, 1, 4]} | ${[1, 9, 1, 9, 8, 1]} | ${7}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getCountOfIterations(arrA, arrB)).toBe(result);
  });
});
