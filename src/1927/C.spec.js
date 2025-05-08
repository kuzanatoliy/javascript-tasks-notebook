const { isItPossibleToConstruct } = require('./C');

describe('1927C. Choose the Different Ones!', () => {
  it.each`
    n    | arr1                  | arr2                | k    | result
    ${1} | ${[2, 3, 8, 5, 6, 5]} | ${[1, 3, 4, 10, 5]} | ${6} | ${'YES'}
    ${2} | ${[2, 3, 4, 5, 6, 5]} | ${[1, 3, 8, 10, 3]} | ${6} | ${'NO'}
    ${3} | ${[1, 3, 5]}          | ${[2, 4, 6]}        | ${4} | ${'YES'}
    ${4} | ${[1, 4]}             | ${[7, 3, 4, 4, 2]}  | ${4} | ${'YES'}
    ${5} | ${[2]}                | ${[6, 4, 4, 2]}     | ${2} | ${'NO'}
    ${5} | ${[3]}                | ${[2, 2, 1, 4, 3]}  | ${2} | ${'NO'}
  `('Base test: $n', ({ arr1, arr2, k, result }) => {
    expect(isItPossibleToConstruct(arr1, arr2, k)).toBe(result);
  });
});
