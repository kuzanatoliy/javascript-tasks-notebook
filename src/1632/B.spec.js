const { getPermutation } = require('./B');

describe('1632B. Roof Construction', () => {
  it.each`
    n    | num   | result
    ${1} | ${2}  | ${[0, 1]}
    ${2} | ${3}  | ${[1, 0, 2]}
    ${3} | ${5}  | ${[1, 2, 3, 0, 4]}
    ${4} | ${10} | ${[1, 2, 3, 4, 5, 6, 7, 0, 8, 9]}
  `('Base test: $n', ({ num, result }) => {
    expect(getPermutation(num)).toStrictEqual(result);
  });
});
