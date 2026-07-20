const { getSubarrLimits } = require('./B');

describe('1821B. Sort the Subarray', () => {
  it.each`
    n    | arrA                     | arrB                     | result
    ${1} | ${[6, 7, 3, 4, 4, 6, 5]} | ${[6, 3, 4, 4, 7, 6, 5]} | ${[2, 5]}
    ${2} | ${[1, 2, 1]}             | ${[1, 1, 2]}             | ${[1, 3]}
    ${3} | ${[2, 2, 1]}             | ${[2, 1, 2]}             | ${[2, 3]}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getSubarrLimits(arrA, arrB)).toStrictEqual(result);
  });
});
