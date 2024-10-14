const { getOriginalArray } = require('./C');

describe('1790C. Premutation', () => {
  it.each`
    n    | subarrs                                                                   | result
    ${1} | ${[[4, 2, 1], [4, 2, 3], [2, 1, 3], [4, 1, 3]]}                           | ${[4, 2, 1, 3]}
    ${2} | ${[[2, 3], [1, 3], [1, 2]]}                                               | ${[1, 2, 3]}
    ${3} | ${[[4, 2, 1, 3], [2, 1, 3, 5], [4, 2, 3, 5], [4, 1, 3, 5], [4, 2, 1, 5]]} | ${[4, 2, 1, 3, 5]}
    ${4} | ${[[2, 3, 4], [1, 3, 4], [1, 2, 3], [1, 2, 4]]}                           | ${[1, 2, 3, 4]}
    ${5} | ${[[2, 1], [1, 3], [2, 3]]}                                               | ${[2, 1, 3]}
  `('Base test: $n', ({ subarrs, result }) => {
    expect(getOriginalArray(subarrs)).toStrictEqual(result);
  });
});
