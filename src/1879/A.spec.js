const { shouldFirstWin } = require('./A');

describe('1879A. Rigged!', () => {
  it.each`
    n    | data                                | result
    ${1} | ${[[7, 4], [9, 3], [4, 6], [2, 2]]} | ${7}
    ${2} | ${[[4, 6], [100, 100]]}             | ${-1}
    ${3} | ${[[1337, 3], [1337, 3]]}           | ${-1}
  `('Base test: $n', ({ data, result }) => {
    expect(shouldFirstWin(data)).toBe(result);
  });
});
