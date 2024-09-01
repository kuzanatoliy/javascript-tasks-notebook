const { getCountOfColors } = require('./A');

describe('1478A. Nezzar and Colorful Balls', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[1, 1, 1, 2, 3, 4]} | ${3}
    ${2} | ${[1, 1, 2, 2, 3]}    | ${2}
    ${3} | ${[2, 2, 2, 2]}       | ${4}
    ${4} | ${[1, 2, 3]}          | ${1}
    ${5} | ${[1]}                | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfColors(array)).toBe(result);
  });
});
