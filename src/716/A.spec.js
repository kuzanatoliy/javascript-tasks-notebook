const { getCountOfWords } = require('./A');

describe('716A. Bus to Udayland', () => {
  it.each`
    n    | c    | timing                   | result
    ${1} | ${1} | ${[1, 3, 5, 7, 9, 10]}   | ${2}
    ${2} | ${5} | ${[1, 3, 8, 14, 19, 20]} | ${3}
  `('Base test: $n', ({ c, timing, result }) => {
    expect(getCountOfWords(c, timing)).toBe(result);
  });
});
