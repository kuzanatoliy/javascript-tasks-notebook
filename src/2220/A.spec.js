const { reorderArray } = require('./A');

describe('2220A. Blocked', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 5, 9]}    | ${[9, 5, 1]}
    ${2} | ${[1, 3, 3, 2]} | ${[-1]}
    ${3} | ${[1, 2, 3]}    | ${[3, 2, 1]}
    ${4} | ${[1]}          | ${[1]}
  `('Base test: $n', ({ arr, result }) => {
    expect(reorderArray(arr)).toStrictEqual(result);
  });
});
