const { isMeowing } = require('./A');

describe('1800A. Musical Puzzle', () => {
  it.each`
    n    | string       | result
    ${1} | ${'abab'}    | ${2}
    ${2} | ${'abacaba'} | ${4}
    ${3} | ${'aaaaaa'}  | ${1}
    ${4} | ${'abcdefg'} | ${6}
    ${5} | ${'babdd'}   | ${4}
  `('Base test: $n', ({ string, result }) => {
    expect(isMeowing(string)).toBe(result);
  });
});
