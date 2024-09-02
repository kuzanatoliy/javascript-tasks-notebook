const { getOrder } = require('./A');

describe('1509A. Average Height', () => {
  it.each`
    n    | array                            | result
    ${1} | ${[1, 1, 2]}                     | ${[1, 1, 2]}
    ${2} | ${[1, 1, 1]}                     | ${[1, 1, 1]}
    ${3} | ${[10, 9, 13, 15, 3, 16, 9, 13]} | ${[9, 13, 15, 3, 9, 13, 10, 16]}
    ${4} | ${[18, 9]}                       | ${[9, 18]}
  `('Base test: $n', ({ array, result }) => {
    expect(getOrder(array)).toStrictEqual(result);
  });
});
