const { getResult } = require('./A');

describe('703A. Mishka and Game', () => {
  it.each`
    n    | plays                       | result
    ${1} | ${[[3, 5], [2, 1], [4, 2]]} | ${'Mishka'}
    ${2} | ${[[6, 1], [1, 6]]}         | ${'Friendship is magic!^^'}
    ${3} | ${[[1, 5], [3, 3], [2, 2]]} | ${'Chris'}
  `('Base test: $n', ({ plays, result }) => {
    expect(getResult(plays)).toBe(result);
  });
});
