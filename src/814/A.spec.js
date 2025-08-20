const { isItPossibleToRestore } = require('./A');

describe('814A. An abandoned sentiment from past', () => {
  it.each`
    n    | arrA                     | arrB                     | result
    ${1} | ${[11, 0, 0, 14]}        | ${[5, 4]}                | ${'YES'}
    ${2} | ${[2, 3, 0, 8, 9, 10]}   | ${[5]}                   | ${'NO'}
    ${3} | ${[8, 94, 0, 4]}         | ${[89]}                  | ${'YES'}
    ${4} | ${[0, 0, 0, 0, 0, 0, 0]} | ${[1, 2, 3, 4, 5, 6, 7]} | ${'YES'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(isItPossibleToRestore(arrA, arrB)).toBe(result);
  });
});
