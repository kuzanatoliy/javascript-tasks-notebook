const { getMaxTime } = require('./A');

describe('1875A. Jellyfish and Undertale', () => {
  it.each`
    n    | a    | b    | arr                | result
    ${1} | ${5} | ${3} | ${[1, 1, 7]}       | ${9}
    ${2} | ${7} | ${1} | ${[1, 2, 5, 6, 8]} | ${21}
  `('Base test: $n', ({ a, b, arr, result }) => {
    expect(getMaxTime(a, b, arr)).toBe(result);
  });
});
