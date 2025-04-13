const { getSumOfGoodElements } = require('./A1');

describe('177A2. Good Matrix Elements', () => {
  it.each`
    n    | matrix                                                                                   | result
    ${1} | ${[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}                                                     | ${45}
    ${2} | ${[[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]} | ${17}
  `('Base test: $n', ({ matrix, result }) => {
    expect(getSumOfGoodElements(matrix)).toBe(result);
  });
});
