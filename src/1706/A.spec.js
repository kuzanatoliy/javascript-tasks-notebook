const { getMinStr } = require('./A');

describe('1706A. Another String Minimization Problem', () => {
  it.each`
    n    | m    | arr             | result
    ${1} | ${5} | ${[1, 1, 3, 1]} | ${'ABABA'}
    ${2} | ${5} | ${[2]}          | ${'BABBB'}
    ${3} | ${1} | ${[1, 1, 1, 1]} | ${'A'}
    ${4} | ${4} | ${[1, 3]}       | ${'AABB'}
    ${5} | ${7} | ${[7, 5]}       | ${'ABABBBB'}
    ${6} | ${5} | ${[5, 5, 3, 5]} | ${'ABABA'}
  `('Base test: $n', ({ arr, h, result }) => {
    expect(getMinStr(arr, h)).toBe(result);
  });
});
