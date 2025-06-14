const { getOrder } = require('./B');

describe('1216B. Shooting', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[20, 10, 20]}       | ${[43, [1, 3, 2]]}
    ${2} | ${[10, 10, 10, 10]}   | ${[64, [1, 2, 3, 4]]}
    ${3} | ${[5, 4, 5, 4, 4, 5]} | ${[69, [1, 3, 6, 2, 4, 5]]}
    ${4} | ${[1, 4]}             | ${[3, [2, 1]]}
  `('Base test: $n', ({ array, result }) => {
    expect(getOrder(array)).toStrictEqual(result);
  });
});
