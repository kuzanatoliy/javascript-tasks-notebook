const { getCount } = require('./A');

describe('2014A. Robin Helps', () => {
  it.each`
    n    | arr                   | k    | result
    ${1} | ${[2, 0]}             | ${2} | ${1}
    ${2} | ${[3, 0, 0]}          | ${2} | ${2}
    ${3} | ${[0, 3, 0, 0, 0, 0]} | ${2} | ${3}
    ${4} | ${[5, 4]}             | ${5} | ${0}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCount(arr, k)).toBe(result);
  });
});
