const { containsBeautifylNumber } = require('./C');

describe('2036C. Anya and 1100', () => {
  it.each`
    n    | map          | queries                             | result
    ${1} | ${'100'}     | ${[[1, 1], [2, 0], [2, 0], [3, 1]]} | ${['NO', 'NO', 'NO', 'NO']}
    ${2} | ${'1100000'} | ${[[6, 1], [7, 1], [4, 1]]}         | ${['YES', 'YES', 'NO']}
    ${3} | ${'111010'}  | ${[[1, 1], [5, 0], [4, 1], [5, 0]]} | ${['NO', 'YES', 'YES', 'YES']}
    ${4} | ${'0100'}    | ${[[3, 1], [1, 1], [2, 0], [2, 1]]} | ${['NO', 'NO', 'NO', 'NO']}
  `('Base test: $n', ({ map, queries, result }) => {
    expect(containsBeautifylNumber(map, queries)).toStrictEqual(result);
  });
});
