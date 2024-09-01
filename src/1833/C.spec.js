const { isItBeautifulArray } = require('./C');

describe('1833C. Vlad Building Beautiful Array', () => {
  it.each`
    n    | array                              | result
    ${1} | ${[2, 6, 8, 4, 3]}                 | ${'NO'}
    ${2} | ${[1, 4, 7, 6, 9]}                 | ${'YES'}
    ${3} | ${[2, 6, 4, 10]}                   | ${'YES'}
    ${4} | ${[5, 29, 13, 9, 10000001, 11, 3]} | ${'YES'}
    ${5} | ${[2, 1, 2, 4, 2]}                 | ${'YES'}
    ${6} | ${[2, 4, 5, 4, 3]}                 | ${'NO'}
    ${7} | ${[2, 5, 5, 4]}                    | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItBeautifulArray(array)).toBe(result);
  });
});
