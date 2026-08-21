const { restoreArray } = require('./C');

describe('1547C. Pair Programming', () => {
  it.each`
    n    | k    | arrA            | arrB            | result
    ${1} | ${3} | ${[2, 0]}       | ${[0, 5]}       | ${[0, 2, 0, 5]}
    ${2} | ${4} | ${[2, 0, 5]}    | ${[0, 6]}       | ${[0, 2, 0, 5, 6]}
    ${3} | ${0} | ${[1, 0]}       | ${[2, 3]}       | ${[-1]}
    ${4} | ${5} | ${[6, 0, 8, 0]} | ${[0, 7, 0, 9]} | ${[0, 6, 0, 7, 0, 8, 0, 9]}
    ${5} | ${5} | ${[8, 7, 8, 0]} | ${[0]}          | ${[-1]}
  `('Base test: $n', ({ k, arrA, arrB, result }) => {
    expect(restoreArray(k, arrA, arrB)).toStrictEqual(result);
  });
});
