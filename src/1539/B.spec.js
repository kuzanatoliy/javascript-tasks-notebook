const { getStrLengths } = require('./B');

describe('1539B. Love Song', () => {
  it.each`
    n    | str                | queries                                                       | result
    ${1} | ${'abacaba'}       | ${[[1, 3], [2, 5], [1, 7]]}                                   | ${[4, 7, 11]}
    ${2} | ${'abbabaa'}       | ${[[1, 3], [5, 7], [6, 6], [2, 4]]}                           | ${[5, 4, 1, 5]}
    ${3} | ${'sonoshikumiwo'} | ${[[1, 5], [2, 10], [7, 7], [1, 13], [4, 8], [2, 5], [3, 9]]} | ${[82, 125, 9, 191, 62, 63, 97]}
  `('Base test: $n', ({ str, queries, result }) => {
    expect(getStrLengths(str, queries)).toStrictEqual(result);
  });
});
