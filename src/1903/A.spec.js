const { isItPossibleToSort } = require('./A');

describe('1903A. Halloumi Boxes', () => {
  it.each`
    n    | array               | k    | result
    ${1} | ${[1, 2, 3]}        | ${2} | ${'YES'}
    ${2} | ${[9, 9, 9]}        | ${1} | ${'YES'}
    ${3} | ${[6, 4, 2, 1]}     | ${4} | ${'YES'}
    ${4} | ${[10, 3, 830, 14]} | ${3} | ${'YES'}
    ${5} | ${[3, 1]}           | ${1} | ${'NO'}
  `('Base test: $n', ({ array, k, result }) => {
    expect(isItPossibleToSort(array, k)).toBe(result);
  });
});
