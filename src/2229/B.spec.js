const { getMaximum } = require('./B');

describe('2229B. Absolute Cinema', () => {
  it.each`
    n    | arrA                            | arrB                            | result
    ${1} | ${[2]}                          | ${[1]}                          | ${3}
    ${2} | ${[1]}                          | ${[2]}                          | ${3}
    ${3} | ${[1, 2, 3]}                    | ${[4, 5, 6]}                    | ${18}
    ${4} | ${[2, 3, 6, 7]}                 | ${[1, 4, 5, 8]}                 | ${27}
    ${5} | ${[1, 8, 18, 19, 18, 2, 18, 4]} | ${[19, 3, 10, 2, 10, 9, 7, 18]} | ${137}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaximum(arrA, arrB)).toBe(result);
  });
});
