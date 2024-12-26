const { isItPossibleToSort } = require('./A');

describe("1891A. Doremy's Paint 3", () => {
  it.each`
    n    | array                              | result
    ${1} | ${[1, 2, 3, 4, 5]}                 | ${'YES'}
    ${2} | ${[6, 5, 3, 4, 4]}                 | ${'YES'}
    ${3} | ${[6, 5, 5, 7, 5, 6, 6, 8, 7]}     | ${'YES'}
    ${4} | ${[4, 3, 2, 1]}                    | ${'NO'}
    ${5} | ${[2, 2, 4, 5, 3, 2]}              | ${'NO'}
    ${6} | ${[1, 3, 17, 19, 27, 57, 179, 13]} | ${'NO'}
    ${7} | ${[3, 17, 57, 179, 92]}            | ${'YES'}
    ${8} | ${[1, 2, 3, 4, 0, 6, 7, 8, 9, 10]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToSort(array)).toBe(result);
  });
});
