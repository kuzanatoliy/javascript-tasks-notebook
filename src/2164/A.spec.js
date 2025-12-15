const { isItPossibleToGetNumber } = require('./A');

describe('2164A. Sequence Game', () => {
  it.each`
    n    | arr                      | num   | result
    ${1} | ${[2, 7, 5]}             | ${4}  | ${'YES'}
    ${2} | ${[-1, 3, 7, -9, -2]}    | ${8}  | ${'NO'}
    ${3} | ${[1, -1, -4, 5, 1, -4]} | ${-2} | ${'YES'}
  `('Base test: $n', ({ arr, num, result }) => {
    expect(isItPossibleToGetNumber(arr, num)).toBe(result);
  });
});
