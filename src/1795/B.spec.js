const { isItPossibleToClean } = require('./B');

describe('1795B - Ideal Point', () => {
  it.each`
    n    | lines                               | k    | result
    ${1} | ${[[1, 3], [7, 9], [2, 5], [3, 6]]} | ${3} | ${'YES'}
    ${2} | ${[[1, 4], [3, 7]]}                 | ${9} | ${'NO'}
    ${3} | ${[[2, 4]]}                         | ${3} | ${'NO'}
    ${4} | ${[[1, 4], [6, 7], [5, 5]]}         | ${5} | ${'YES'}
  `('Base test: $n', ({ lines, k, result }) => {
    expect(isItPossibleToClean(lines, k)).toBe(result);
  });
});
