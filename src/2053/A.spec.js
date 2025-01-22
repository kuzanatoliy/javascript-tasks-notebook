const { areTwoWays } = require('./A');

describe('2053A. Tender Carpenter', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[2, 3, 5, 7]}       | ${'YES'}
    ${2} | ${[115, 9, 2, 28]}    | ${'NO'}
    ${3} | ${[8, 4, 1, 6, 2]}    | ${'NO'}
    ${4} | ${[1, 5, 4, 1, 4, 7]} | ${'YES'}
    ${5} | ${[100000, 100000]}   | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(areTwoWays(arr)).toBe(result);
  });
});
