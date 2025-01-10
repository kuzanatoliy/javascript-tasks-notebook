const { getMaxDif } = require('./A');

describe('2051B. Journey', () => {
  it.each`
    n    | arrA                  | arrB                  | result
    ${1} | ${[3, 2]}             | ${[2, 1]}             | ${4}
    ${2} | ${[5]}                | ${[8]}                | ${5}
    ${3} | ${[1, 1, 1]}          | ${[2, 2, 2]}          | ${1}
    ${4} | ${[8, 2, 5, 6, 2, 6]} | ${[8, 2, 7, 4, 3, 4]} | ${16}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaxDif(arrA, arrB)).toBe(result);
  });
});
