const { getMoves } = require('./A');

describe('489A. SwapSort', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[5, 2, 5, 1, 4]}          | ${[[0, 3], [2, 4]]}
    ${2} | ${[10, 20, 20, 40, 60, 60]} | ${[]}
    ${3} | ${[101, 100]}               | ${[[0, 1]]}
  `('Base test: $n', ({ array, result }) => {
    expect(getMoves(array)).toStrictEqual(result);
  });
});
