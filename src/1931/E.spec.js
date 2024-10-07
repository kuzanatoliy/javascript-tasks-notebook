const { getWinners } = require('./E');

describe("1931E. Anna and the Valentine's Day Gift", () => {
  it.each`
    n    | array                               | m     | result
    ${1} | ${[14, 2]}                          | ${2}  | ${'Sasha'}
    ${2} | ${[9, 56, 1]}                       | ${5}  | ${'Anna'}
    ${3} | ${[1, 2007, 800, 1580]}             | ${10} | ${'Anna'}
    ${4} | ${[5000, 123, 30, 4]}               | ${5}  | ${'Sasha'}
    ${5} | ${[6, 4, 6, 2, 3, 1, 10, 9, 10, 7]} | ${10} | ${'Sasha'}
    ${6} | ${[6]}                              | ${1}  | ${'Anna'}
    ${7} | ${[10]}                             | ${1}  | ${'Anna'}
    ${8} | ${[1, 2, 9, 10, 10, 2, 10, 2]}      | ${9}  | ${'Anna'}
    ${9} | ${[10, 10, 10, 10]}                 | ${5}  | ${'Sasha'}
  `('Base test: $n', ({ array, m, result }) => {
    expect(getWinners(array, m)).toBe(result);
  });
});
