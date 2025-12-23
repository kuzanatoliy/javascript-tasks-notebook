const { isValleyArray } = require('./D');

describe('1760D. Challenging Valleys', () => {
  it.each`
    n    | arr                                  | result
    ${1} | ${[3, 2, 2, 1, 2, 2, 3]}             | ${'YES'}
    ${2} | ${[1, 1, 1, 2, 3, 3, 4, 5, 6, 6, 6]} | ${'YES'}
    ${3} | ${[1, 2, 3, 4, 3, 2, 1]}             | ${'NO'}
    ${4} | ${[9, 7, 4, 6, 9, 9, 10]}            | ${'YES'}
    ${5} | ${[1000000000]}                      | ${'YES'}
    ${6} | ${[9, 4, 4, 5, 9, 4, 9, 10]}         | ${'NO'}
    ${7} | ${[10, 10, 8, 10, 10, 4]}            | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isValleyArray(arr)).toBe(result);
  });
});
