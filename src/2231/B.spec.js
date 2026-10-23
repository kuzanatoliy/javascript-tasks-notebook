const { isItPossibleToSort } = require('./B');

describe('2231B. Another Sorting Problem', () => {
  it.each`
    n    | num                        | result
    ${1} | ${[1, 2, 3, 4]}            | ${'YES'}
    ${2} | ${[10, 5, 9, 4, 4]}        | ${'NO'}
    ${3} | ${[8, 3, 9, 4, 10, 5, 11]} | ${'YES'}
    ${4} | ${[5, 3, 10, 5, 9, 7]}     | ${'NO'}
    ${5} | ${[2, 1, 1]}               | ${'YES'}
    ${6} | ${[2, 1, 1, 2, 1]}         | ${'YES'}
    ${7} | ${[3, 1, 2]}               | ${'YES'}
    ${8} | ${[2, 1, 2, 3, 1]}         | ${'NO'}
  `('Base test: $n', ({ num, result }) => {
    expect(isItPossibleToSort(num)).toStrictEqual(result);
  });
});
