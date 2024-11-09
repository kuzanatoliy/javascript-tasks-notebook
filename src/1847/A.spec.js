const { getMinPower } = require('./A');

describe('1847A. The Man who became a God', () => {
  it.each`
    n    | k    | array                                   | result
    ${1} | ${2} | ${[1, 3, 5, 2]}                         | ${4}
    ${2} | ${3} | ${[1, 9, 12, 4, 7, 2]}                  | ${11}
    ${3} | ${8} | ${[1, 9, 8, 2, 3, 3, 1, 8, 7, 7, 9, 2]} | ${2}
    ${4} | ${1} | ${[1]}                                  | ${0}
  `('Base test: $n', ({ k, array, result }) => {
    expect(getMinPower(k, array)).toBe(result);
  });
});
