const { getWinner } = require('./B');

describe('1634B. Fortune Telling', () => {
  it.each`
    n    | x             | y             | array                       | result
    ${1} | ${7}          | ${9}          | ${[2]}                      | ${'Alice'}
    ${2} | ${0}          | ${2}          | ${[1, 3]}                   | ${'Alice'}
    ${3} | ${0}          | ${1}          | ${[1, 2, 3, 4]}             | ${'Bob'}
    ${3} | ${1000000000} | ${3000000000} | ${[1000000000, 1000000000]} | ${'Alice'}
  `('Base test: $n', ({ x, y, array, result }) => {
    expect(getWinner(x, y, array)).toBe(result);
  });
});
