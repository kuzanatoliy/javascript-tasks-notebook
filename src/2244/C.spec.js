const { isItPossibleToSort } = require('./C');

describe('2244C. Stepan and Permutation', () => {
  it.each`
    n    | x    | y    | arr                   | result
    ${1} | ${5} | ${2} | ${[5, 4, 3, 2, 1]}    | ${'YES'}
    ${2} | ${6} | ${2} | ${[2, 1, 4, 3, 6, 5]} | ${'NO'}
    ${3} | ${4} | ${2} | ${[1, 2, 3, 4]}       | ${'YES'}
    ${4} | ${5} | ${2} | ${[1, 2, 3, 5, 4]}    | ${'YES'}
  `('Base test: $n', ({ x, y, arr, result }) => {
    expect(isItPossibleToSort(x, y, arr)).toBe(result);
  });
});
