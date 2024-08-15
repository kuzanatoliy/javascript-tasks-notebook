const { isItPossible } = require('./B');

describe('1660B. Vlad and Candies', () => {
  it.each`
    n    | array                         | result
    ${1} | ${[2, 3]}                     | ${'YES'}
    ${2} | ${[2]}                        | ${'NO'}
    ${3} | ${[1, 6, 2, 4, 3]}            | ${'NO'}
    ${4} | ${[2, 2, 2, 1]}               | ${'YES'}
    ${5} | ${[1, 1000000000, 999999999]} | ${'YES'}
    ${6} | ${[1]}                        | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossible(array)).toBe(result);
  });
});
