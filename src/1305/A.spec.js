const { getPresentsOrder } = require('./A');

describe('1305A. Kuroni and the Gifts', () => {
  it.each`
    n    | arrA         | arrB         | result
    ${1} | ${[1, 8, 5]} | ${[8, 4, 5]} | ${[[1, 5, 8], [4, 5, 8]]}
    ${2} | ${[1, 7, 5]} | ${[6, 1, 2]} | ${[[1, 5, 7], [1, 2, 6]]}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getPresentsOrder(arrA, arrB)).toStrictEqual(result);
  });
});
