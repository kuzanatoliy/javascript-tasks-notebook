const { isItPossibleToReorder } = require('./B');

describe('2031B. Penchick and Satay Sticks', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[2, 1, 3, 4]} | ${'YES'}
    ${2} | ${[4, 2, 3, 1]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToReorder(arr)).toStrictEqual(result);
  });
});
