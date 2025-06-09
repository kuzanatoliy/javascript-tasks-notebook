const { isItPossibleToConstractMatrix } = require('./B');

describe('1426B. Symmetric Matrix', () => {
  it.each`
    n    | tils                                                      | m      | result
    ${1} | ${[[[1, 2], [5, 6]], [[5, 7], [7, 4]], [[8, 9], [9, 8]]]} | ${4}   | ${'YES'}
    ${2} | ${[[[1, 1], [1, 1]], [[2, 2], [2, 2]]]}                   | ${5}   | ${'NO'}
    ${3} | ${[[[10, 10], [10, 10]]]}                                 | ${100} | ${'YES'}
    ${4} | ${[[[4, 5], [8, 4]]]}                                     | ${2}   | ${'NO'}
    ${5} | ${[[[1, 1], [1, 1]], [[1, 2], [3, 4]]]}                   | ${2}   | ${'YES'}
    ${6} | ${[[[1, 1], [1, 1]]]}                                     | ${2}   | ${'YES'}
  `('Base test: $n', ({ tils, m, result }) => {
    expect(isItPossibleToConstractMatrix(tils, m)).toBe(result);
  });
});
