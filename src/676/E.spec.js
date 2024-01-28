const { isWinningStrategy } = require('./E');

describe('676E. The Last Fight Between Human and AI', () => {
  it.each`
    n    | size | k      | vals                     | result
    ${1} | ${1} | ${2}   | ${[-1, '?']}             | ${'yes'}
    ${2} | ${2} | ${100} | ${[-10000, 0, 1]}        | ${'yes'}
    ${3} | ${4} | ${5}   | ${['?', 1, '?', 1, '?']} | ${'no'}
  `('Base test: $n', ({ size, k, vals, result }) => {
    expect(isWinningStrategy(size, k, vals)).toBe(result);
  });
});
