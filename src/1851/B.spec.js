const { isItPossibleToSort } = require('./B');

describe('1851B. Parity Sort', () => {
  it.each`
    n    | array                  | result
    ${1} | ${[7, 10, 1, 3, 2]}    | ${'YES'}
    ${2} | ${[11, 9, 3, 5]}       | ${'YES'}
    ${3} | ${[11, 3, 15, 3, 2]}   | ${'NO'}
    ${4} | ${[10, 7, 8, 1, 2, 3]} | ${'NO'}
    ${5} | ${[10]}                | ${'YES'}
    ${6} | ${[6, 6, 4, 1, 6]}     | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToSort(array)).toBe(result);
  });
});
