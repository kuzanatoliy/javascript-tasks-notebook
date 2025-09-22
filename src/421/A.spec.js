const { getMap } = require('./A');

describe('421A. Pasha and Hamsters', () => {
  it.each`
    n    | num  | arrA               | arrB         | result
    ${1} | ${4} | ${[1, 2]}          | ${[2, 3, 4]} | ${[1, 2, 2, 2]}
    ${2} | ${5} | ${[3, 4, 1, 2, 5]} | ${[2, 3]}    | ${[1, 2, 2, 1, 1]}
  `('Base test: $n', ({ num, arrA, arrB, result }) => {
    expect(getMap(num, arrA, arrB)).toStrictEqual(result);
  });
});
