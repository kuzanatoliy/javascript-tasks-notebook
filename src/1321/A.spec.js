const { getMinCost } = require('./A');

describe('1321A. Contest for Robots', () => {
  it.each`
    n    | arrA                           | arrB                           | result
    ${1} | ${[1, 1, 1, 0, 0]}             | ${[0, 1, 1, 1, 1]}             | ${3}
    ${2} | ${[0, 0, 0]}                   | ${[0, 0, 0]}                   | ${-1}
    ${3} | ${[1, 1, 1, 1]}                | ${[1, 1, 1, 1]}                | ${-1}
    ${4} | ${[1, 0, 0, 0, 0, 0, 0, 0, 1]} | ${[0, 1, 1, 0, 1, 1, 1, 1, 0]} | ${4}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMinCost(arrA, arrB)).toBe(result);
  });
});
