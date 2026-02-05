const { getMaxSums } = require('./C');

describe('2175C. Replace and Sum', () => {
  it.each`
    n    | arrA            | arrB            | queries                     | result
    ${1} | ${[3, 2, 1]}    | ${[1, 2, 3]}    | ${[[1, 3]]}                 | ${[9]}
    ${2} | ${[1]}          | ${[2]}          | ${[[1, 1]]}                 | ${[2]}
    ${3} | ${[6, 7, 5]}    | ${[9, 6, 8]}    | ${[[1, 2], [2, 3]]}         | ${[17, 16]}
    ${4} | ${[4, 3, 2, 1]} | ${[5, 1, 3, 1]} | ${[[1, 2], [2, 4], [3, 4]]} | ${[8, 7, 4]}
  `('Base test: $n', ({ arrA, arrB, queries, result }) => {
    expect(getMaxSums(arrA, arrB, queries)).toStrictEqual(result);
  });
});
