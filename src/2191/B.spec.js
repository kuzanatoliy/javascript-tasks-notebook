const { isItPossilbeToReorder } = require('./B');

describe('2191B. MEX Reordering', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1, 0]}             | ${'YES'}
    ${2} | ${[0, 3, 0]}          | ${'NO'}
    ${3} | ${[1, 0, 5, 0, 6, 1]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossilbeToReorder(arr)).toBe(result);
  });
});
