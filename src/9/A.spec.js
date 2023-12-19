const { getFraction } = require('./A');

describe('9A. Die Roll', () => {
  it.each`
    n    | y    | w    | result
    ${1} | ${4} | ${2} | ${'1/2'}
  `('Base test: $n', ({ y, w, result }) => {
    expect(getFraction(y, w)).toBe(result);
  });
});
