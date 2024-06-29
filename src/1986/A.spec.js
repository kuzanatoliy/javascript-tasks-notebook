const { getSmallestValue } = require('./A');

describe('1986A. X Axis', () => {
  it.each`
    n    | array         | result
    ${1} | ${[1, 1, 1]}  | ${0}
    ${2} | ${[1, 5, 9]}  | ${8}
    ${3} | ${[8, 2, 8]}  | ${6}
    ${4} | ${[10, 9, 3]} | ${7}
    ${5} | ${[2, 1, 1]}  | ${1}
    ${6} | ${[2, 4, 1]}  | ${3}
    ${7} | ${[7, 3, 5]}  | ${4}
    ${8} | ${[1, 9, 4]}  | ${8}
  `('Base test: $n', ({ array, result }) => {
    expect(getSmallestValue(array)).toBe(result);
  });
});
