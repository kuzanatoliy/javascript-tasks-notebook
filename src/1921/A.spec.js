const { getAriaOfTheSquare } = require('./A');

describe('1921A. Square', () => {
  it.each`
    n    | point1      | point2      | point3      | point4      | result
    ${1} | ${[1, 2]}   | ${[4, 5]}   | ${[1, 5]}   | ${[4, 2]}   | ${9}
    ${2} | ${[-1, 1]}  | ${[1, -1]}  | ${[1, 1]}   | ${[-1, -1]} | ${4}
    ${3} | ${[45, 11]} | ${[45, 39]} | ${[17, 11]} | ${[17, 39]} | ${784}
  `('Base test: $n', ({ point1, point2, point3, point4, result }) => {
    expect(getAriaOfTheSquare(point1, point2, point3, point4)).toBe(result);
  });
});
