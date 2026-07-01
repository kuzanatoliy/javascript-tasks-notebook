const { getMinCommonHeight } = require('./A');

describe('2337A. Destroying Towers', () => {
  it.each`
    n     | arr                   | result
    ${1}  | ${[1, 3, 5]}          | ${3}
    ${2}  | ${[5, 4, 3]}          | ${12}
    ${3}  | ${[3, 2, 5, 1]}       | ${8}
    ${4}  | ${[2, 1, 4, 3]}       | ${5}
    ${5}  | ${[4, 1, 3, 5, 2]}    | ${8}
    ${6}  | ${[2, 2, 3, 1, 4]}    | ${8}
    ${7}  | ${[7]}                | ${7}
    ${8}  | ${[6, 1, 5, 2, 4, 3]} | ${11}
    ${9}  | ${[1, 1, 1, 1]}       | ${4}
    ${10} | ${[10, 3, 8, 6, 9]}   | ${22}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinCommonHeight(arr)).toBe(result);
  });
});
