const { getOperationsCount } = require('./C');

describe('1015C. Songs Compression', () => {
  it.each`
    n    | m     | songs                                | result
    ${1} | ${21} | ${[[10, 8], [7, 4], [3, 1], [5, 4]]} | ${2}
    ${2} | ${16} | ${[[10, 8], [7, 4], [3, 1], [5, 4]]} | ${-1}
  `('Base test: $n', ({ m, songs, result }) => {
    expect(getOperationsCount(m, songs)).toBe(result);
  });
});
