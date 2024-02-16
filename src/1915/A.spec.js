const { getUniqueNumber } = require('./A');

describe('1915A. Odd One Out', () => {
  it.each`
    n     | numbers      | result
    ${1}  | ${[1, 2, 2]} | ${1}
    ${2}  | ${[4, 3, 4]} | ${3}
    ${3}  | ${[5, 5, 6]} | ${6}
    ${4}  | ${[7, 8, 8]} | ${7}
    ${5}  | ${[9, 0, 9]} | ${0}
    ${6}  | ${[3, 6, 3]} | ${6}
    ${7}  | ${[2, 8, 2]} | ${8}
    ${8}  | ${[5, 7, 7]} | ${5}
    ${9}  | ${[7, 7, 5]} | ${5}
    ${10} | ${[5, 7, 5]} | ${7}
  `('Base test: $n', ({ numbers, result }) => {
    expect(getUniqueNumber(numbers)).toBe(result);
  });
});
