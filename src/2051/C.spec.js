const { getStatusMap } = require('./C');

describe('2051B. Journey', () => {
  it.each`
    n    | num  | a               | q               | result
    ${1} | ${4} | ${[1, 2, 3, 4]} | ${[1, 3, 4]}    | ${'0100'}
    ${2} | ${5} | ${[1, 2, 3, 4]} | ${[1, 3, 4]}    | ${'0000'}
    ${3} | ${4} | ${[1, 2, 3, 4]} | ${[1, 2, 3, 4]} | ${'1111'}
    ${4} | ${2} | ${[1, 2]}       | ${[2]}          | ${'10'}
  `('Base test: $n', ({ num, a, q, result }) => {
    expect(getStatusMap(num, a, q)).toBe(result);
  });
});
