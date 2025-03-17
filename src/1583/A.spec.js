const { getLargestSubSet } = require('./A');

describe('1583A. Windblume Ode', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[8, 1, 2]}                   | ${[1, 3]}
    ${2} | ${[6, 9, 4, 2]}                | ${[1, 3, 4, 2]}
    ${3} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9]} | ${[2, 4, 6, 8, 1, 3, 5, 7, 9]}
    ${4} | ${[200, 199, 198]}             | ${[1, 3, 2]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getLargestSubSet(arr)).toStrictEqual(result);
  });
});
