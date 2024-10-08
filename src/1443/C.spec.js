const { getDeliveryTime } = require('./C');

describe('1443B. Saving the City', () => {
  it.each`
    n    | arrA                                    | arrB                                    | result
    ${1} | ${[3, 7, 4, 5]}                         | ${[2, 1, 2, 4]}                         | ${5}
    ${2} | ${[1, 2, 3, 4]}                         | ${[3, 3, 3, 3]}                         | ${3}
    ${3} | ${[1, 2]}                               | ${[10, 10]}                             | ${2}
    ${4} | ${[10, 10]}                             | ${[1, 2]}                               | ${3}
    ${5} | ${[82, 47, 64, 25, 30, 26, 10, 89, 59]} | ${[38, 59, 47, 37, 73, 33, 12, 88, 92]} | ${88}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(getDeliveryTime(arrA, arrB)).toBe(result);
  });
});
