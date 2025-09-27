const { getCountOfCross } = require('./B');

describe('2148B. Lasers', () => {
  it.each`
    n    | x         | y         | arrA        | arrB    | result
    ${1} | ${2}      | ${2}      | ${[1]}      | ${[1]}  | ${2}
    ${2} | ${100000} | ${100000} | ${[42, 58]} | ${[32]} | ${3}
  `('Base test: $n', ({ x, y, arrA, arrB, result }) => {
    expect(getCountOfCross(x, y, arrA, arrB)).toBe(result);
  });
});
