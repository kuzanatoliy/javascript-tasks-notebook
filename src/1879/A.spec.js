const { shouldFirstWin } = require('./A');

describe('1879A. Rigged!', () => {
  it.each`
    data                                | result
    ${[[7, 4], [9, 3], [4, 6], [2, 2]]} | ${7}
    ${[[4, 6], [100, 100]]}             | ${-1}
    ${[[1337, 3], [1337, 3]]}           | ${-1}
  `('Base test: input $data output $result', ({ data, result }) => {
    expect(shouldFirstWin(data)).toBe(result);
  });
});
