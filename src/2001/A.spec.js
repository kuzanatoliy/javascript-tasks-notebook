const { getMinCountOfOperations } = require('./A');

describe('2001A. Make All Equal', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[1]}                      | ${0}
    ${2} | ${[1, 2, 3]}                | ${2}
    ${3} | ${[1, 2, 2]}                | ${1}
    ${4} | ${[5, 4, 3, 2, 1]}          | ${4}
    ${5} | ${[1, 1, 2, 2, 3, 3]}       | ${4}
    ${6} | ${[8, 7, 6, 3, 8, 7, 6, 3]} | ${6}
    ${7} | ${[1, 1, 4, 5, 1, 4]}       | ${3}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinCountOfOperations(array)).toBe(result);
  });
});
