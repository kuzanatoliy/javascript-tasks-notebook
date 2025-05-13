const { isItGoodArray } = require('./B');

describe('1856B. Good Arrays', () => {
  it.each`
    n    | array                                 | result
    ${1} | ${[6, 1, 2]}                          | ${'YES'}
    ${2} | ${[1, 1]}                             | ${'NO'}
    ${3} | ${[3, 1, 2, 4]}                       | ${'YES'}
    ${4} | ${[17]}                               | ${'NO'}
    ${5} | ${[1, 2, 1, 1, 1]}                    | ${'NO'}
    ${6} | ${[618343152, 819343431, 1000000000]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItGoodArray(array)).toBe(result);
  });
});
