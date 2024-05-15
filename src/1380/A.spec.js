const { isPermutation } = require('./A');

describe('1380A. Three Indices', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[2, 1, 4, 3]}       | ${['YES', [2, 3, 4]]}
    ${2} | ${[4, 6, 1, 2, 5, 3]} | ${['YES', [1, 2, 3]]}
    ${3} | ${[5, 3, 1, 2, 4]}    | ${['NO']}
    ${4} | ${[1, 2, 4, 3]}       | ${['YES', [1, 3, 4]]}
  `('Base test: $n', ({ array, result }) => {
    expect(isPermutation(array)).toStrictEqual(result);
  });
});
