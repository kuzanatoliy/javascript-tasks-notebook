const { getString } = require('./A');

describe('1925A. We Got Everything Covered!', () => {
  it.each`
    n    | data      | result
    ${1} | ${[1, 2]} | ${'ab'}
    ${2} | ${[2, 1]} | ${'aa'}
    ${3} | ${[2, 2]} | ${'abab'}
    ${4} | ${[2, 3]} | ${'abcabc'}
  `('Base test: $n', ({ data, result }) => {
    expect(getString(data)).toBe(result);
  });
});
