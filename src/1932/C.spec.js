const { getMods } = require('./C');

describe('1932C', () => {
  it.each`
    n    | mod      | array                 | operations  | result
    ${1} | ${6}     | ${[3, 1, 4, 2]}       | ${'LRRL'}   | ${[0, 2, 4, 1]}
    ${2} | ${1}     | ${[1, 1, 1, 1, 1]}    | ${'LLLLL'}  | ${[0, 0, 0, 0, 0]}
    ${3} | ${8}     | ${[1, 2, 3, 4, 5, 6]} | ${'RLLLRR'} | ${[0, 0, 0, 4, 4, 4]}
    ${4} | ${10000} | ${[10000]}            | ${'R'}      | ${[0]}
  `('Base test: $n', ({ mod, array, operations, result }) => {
    expect(getMods(mod, array, operations)).toStrictEqual(result);
  });
});
