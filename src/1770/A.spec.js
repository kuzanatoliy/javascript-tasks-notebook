const { getMaxSum } = require('./A');

describe('1770A. Koxia and Whiteboards', () => {
  it.each`
    n    | arrA               | arrB                                    | result
    ${1} | ${[1, 2, 3]}       | ${[4, 5]}                               | ${12}
    ${2} | ${[1, 2]}          | ${[3, 4, 5]}                            | ${9}
    ${3} | ${[100]}           | ${[1]}                                  | ${1}
    ${4} | ${[1, 1, 1, 1, 1]} | ${[1000000000, 1000000000, 1000000000]} | ${3000000002}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getMaxSum(arrA, arrB)).toBe(result);
  });
});
