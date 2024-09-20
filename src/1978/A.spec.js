const { getBetterSum } = require('./A');

describe('1978A. Alice and Books', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 1]}          | ${2}
    ${2} | ${[2, 3, 3, 1]}    | ${4}
    ${3} | ${[2, 2, 3, 2, 2]} | ${5}
    ${4} | ${[10, 3]}         | ${13}
    ${5} | ${[1, 2, 3]}       | ${5}
  `('Base test: $n', ({ arr, result }) => {
    expect(getBetterSum(arr)).toBe(result);
  });
});
