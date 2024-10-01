const { getMinCountOfBurles } = require('./C');

describe('1931C. Make Equal Again', () => {
  it.each`
    n    | array                          | result
    ${1} | ${[1, 2, 3, 4, 5, 1]}          | ${4}
    ${2} | ${[1, 1, 1, 1, 1, 1, 1]}       | ${0}
    ${3} | ${[8, 8, 8, 1, 2, 8, 8, 8]}    | ${2}
    ${4} | ${[1]}                         | ${0}
    ${5} | ${[1, 2]}                      | ${1}
    ${6} | ${[1, 2, 3]}                   | ${2}
    ${7} | ${[4, 3, 2, 7, 1, 1, 3]}       | ${6}
    ${8} | ${[9, 9, 2, 9, 2, 5, 5, 5, 3]} | ${7}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinCountOfBurles(array)).toBe(result);
  });
});
