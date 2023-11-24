const { custruclString } = require('./B');

describe('1335A. Candies and Two Sisters', () => {
  it.each`
    n    | length | sublength1 | sublength2 | result
    ${1} | ${7}   | ${5}       | ${3}       | ${'abcabca'}
    ${2} | ${6}   | ${1}       | ${1}       | ${'aaaaaa'}
    ${3} | ${6}   | ${6}       | ${1}       | ${'aaaaaa'}
    ${4} | ${5}   | ${2}       | ${2}       | ${'ababa'}
  `('Base test: $n', ({ length, sublength1, sublength2, result }) => {
    expect(custruclString(length, sublength1, sublength2)).toBe(result);
  });
});
