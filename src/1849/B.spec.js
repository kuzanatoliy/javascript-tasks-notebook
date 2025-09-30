const { getOrder } = require('./B');

describe('1849A. Morning Sandwich', () => {
  it.each`
    n    | arr             | k    | result
    ${1} | ${[1, 2, 3]}    | ${2} | ${[2, 1, 3]}
    ${2} | ${[1, 1]}       | ${3} | ${[1, 2]}
    ${3} | ${[2, 8, 3, 5]} | ${3} | ${[3, 1, 2, 4]}
    ${4} | ${[1, 4]}       | ${1} | ${[1, 2]}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getOrder(arr, k)).toStrictEqual(result);
  });
});
