const { isPair } = require('./A');

describe('29A. Spit Problem', () => {
  it.each`
    n    | camels                                           | result
    ${1} | ${[[0, 1], [1, -1]]}                             | ${'YES'}
    ${2} | ${[[0, 1], [1, 1], [2, -2]]}                     | ${'NO'}
    ${3} | ${[[2, -10], [3, 10], [0, 5], [5, -5], [10, 1]]} | ${'YES'}
  `('Base test: $n', ({ camels, result }) => {
    expect(isPair(camels)).toBe(result);
  });
});
