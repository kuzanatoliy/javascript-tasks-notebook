const { isFastenedJacket } = require('./A');

describe('691A. Fashion in Berland', () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1, 0, 1]} | ${'YES'}
    ${2} | ${[1, 0, 0]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isFastenedJacket(arr)).toBe(result);
  });
});
