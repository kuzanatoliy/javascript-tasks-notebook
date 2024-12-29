const { getCountOfOperations } = require('./A');

describe('1762A. Divide and Conquer', () => {
  it.each`
    n    | array           | result
    ${1} | ${[1, 1, 1, 1]} | ${0}
    ${2} | ${[7, 4]}       | ${2}
    ${3} | ${[1, 2, 4]}    | ${1}
    ${4} | ${[15]}         | ${4}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfOperations(array)).toBe(result);
  });
});
