const { getMaxSubstrLength } = require('./B');

describe('1831B. arrA merging', () => {
  it.each`
    n    | arrA                  | arrB                  | result
    ${1} | ${[2]}                | ${[2]}                | ${2}
    ${2} | ${[1, 2, 3]}          | ${[4, 5, 6]}          | ${1}
    ${3} | ${[1, 2]}             | ${[2, 1]}             | ${2}
    ${4} | ${[1, 2, 2, 2, 2]}    | ${[2, 1, 1, 1, 1]}    | ${5}
    ${5} | ${[2, 2, 1, 2, 2, 1]} | ${[2, 2, 2, 1, 2, 1]} | ${5}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaxSubstrLength(arrA, arrB)).toBe(result);
  });
});
