const { isItPossibleToSort } = require('./A');

describe('1670A. Prof. Slim', () => {
  it.each`
    n    | arr                              | result
    ${1} | ${[7, 3, 2, -11, -13, -17, -23]} | ${'NO'}
    ${2} | ${[4, 10, 25, 47, 71, 96]}       | ${'YES'}
    ${3} | ${[71, -35, 7, -4, -11, -25]}    | ${'YES'}
    ${4} | ${[-45, 9, -48, -67, -55, 7]}    | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToSort(arr)).toBe(result);
  });
});
