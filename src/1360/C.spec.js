const { checkSimilarPairs } = require('./C');

describe('1560C. Similar Pairs', () => {
  it.each`
    n    | numbers                 | result
    ${1} | ${[11, 14, 16, 12]}     | ${'YES'}
    ${2} | ${[1, 8]}               | ${'NO'}
    ${3} | ${[1, 1, 1, 1]}         | ${'YES'}
    ${4} | ${[1, 2, 5, 6]}         | ${'YES'}
    ${5} | ${[12, 13]}             | ${'YES'}
    ${6} | ${[1, 6, 3, 10, 5, 8]}  | ${'YES'}
    ${7} | ${[1, 12, 3, 10, 5, 8]} | ${'NO'}
  `('Base test: $n', ({ numbers, result }) => {
    expect(checkSimilarPairs(numbers)).toBe(result);
  });
});
