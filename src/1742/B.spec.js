const { isItPossibleToSort } = require('./B');

describe('1742B. Increasing', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 1, 1, 1]}    | ${'NO'}
    ${2} | ${[8, 7, 1, 3, 4]} | ${'YES'}
    ${3} | ${[5]}             | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToSort(array)).toBe(result);
  });
});
