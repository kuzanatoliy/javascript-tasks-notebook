const { getMaxSum } = require('./B');

describe("1749B. Death's Blessing", () => {
  it.each`
    n    | arrA                        | arrB                        | result
    ${1} | ${[10]}                     | ${[0]}                      | ${10}
    ${2} | ${[100, 1, 100]}            | ${[1, 100, 1]}              | ${203}
    ${3} | ${[2, 6, 7, 3]}             | ${[3, 6, 0, 5]}             | ${26}
    ${4} | ${[1000000000, 1000000000]} | ${[1000000000, 1000000000]} | ${3000000000}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaxSum(arrA, arrB)).toBe(result);
  });
});
