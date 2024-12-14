const { isItPossibleToCreateButyArray } = require('./A');

describe('1536A. Omkar and Bad Story', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[3, 0, 9]}          | ${['YES', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]}
    ${2} | ${[3, 4]}             | ${['YES', [0, 1, 2, 3, 4]]}
    ${3} | ${[-7, 3, 13, -2, 8]} | ${['NO']}
    ${4} | ${[4, 8, 12, 6]}      | ${['YES', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToCreateButyArray(array)).toStrictEqual(result);
  });
});
