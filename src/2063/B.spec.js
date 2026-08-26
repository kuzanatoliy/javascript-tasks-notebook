const { getMinSum } = require('./B');

describe('2063B. Subsequence Update', () => {
  it.each`
    n    | arr                   | l    | r    | result
    ${1} | ${[2, 1]}             | ${1} | ${1} | ${1}
    ${2} | ${[1, 2, 3]}          | ${2} | ${3} | ${3}
    ${3} | ${[3, 1, 2]}          | ${1} | ${3} | ${6}
    ${4} | ${[1, 2, 2, 2]}       | ${2} | ${3} | ${3}
    ${5} | ${[3, 3, 2, 3, 5]}    | ${2} | ${5} | ${11}
    ${6} | ${[3, 6, 6, 4, 3, 2]} | ${1} | ${3} | ${8}
  `('Base test: $n', ({ arr, l, r, result }) => {
    expect(getMinSum(arr, l, r)).toBe(result);
  });
});
