const { getMaxValue } = require('./B');

describe('1452B. Toy Blocks', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[3, 2, 2]}    | ${1}
    ${2} | ${[2, 2, 3, 2]} | ${0}
    ${3} | ${[0, 3, 0]}    | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxValue(arr)).toBe(result);
  });
});
