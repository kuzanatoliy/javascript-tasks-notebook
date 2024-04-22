const { getMaxMatchingPairs } = require('./C');

describe('1365C. Rotation Matching', () => {
  it.each`
    n    | arrA               | arrB               | result
    ${1} | ${[1, 2, 3, 4, 5]} | ${[2, 3, 4, 5, 1]} | ${5}
    ${2} | ${[5, 4, 3, 2, 1]} | ${[1, 2, 3, 4, 5]} | ${1}
    ${3} | ${[1, 3, 2, 4]}    | ${[4, 2, 3, 1]}    | ${2}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaxMatchingPairs(arrA, arrB)).toBe(result);
  });
});
