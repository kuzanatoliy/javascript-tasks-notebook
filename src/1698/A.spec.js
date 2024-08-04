const { getResultNumber } = require('./A');

describe('1698A. XOR Mixup', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[4, 3, 2, 5]}       | ${4}
    ${2} | ${[6, 1, 10, 7, 10]}  | ${6}
    ${3} | ${[6, 6, 6, 6, 6, 6]} | ${6}
    ${4} | ${[100, 100, 0]}      | ${100}
  `('Base test: $n', ({ array, result }) => {
    expect(getResultNumber(array)).toBe(result);
  });
});
