const { isItPossibleToSort } = require('./B');

describe('1638B. Odd Swap Sort', () => {
  it.each`
    n    | arr                 | result
    ${1} | ${[1, 6, 31, 14]}   | ${'YES'}
    ${2} | ${[4, 2]}           | ${'NO'}
    ${3} | ${[2, 9, 6, 7, 10]} | ${'NO'}
    ${4} | ${[6, 6, 6]}        | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToSort(arr)).toBe(result);
  });
});
