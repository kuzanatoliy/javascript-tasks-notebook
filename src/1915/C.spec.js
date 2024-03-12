const { isItPossibleToCreateSquare } = require('./C');

describe('1915C. Can I Square?', () => {
  it.each`
    n    | array                    | result
    ${1} | ${[9]}                   | ${'YES'}
    ${2} | ${[14, 2]}               | ${'YES'}
    ${3} | ${[1, 2, 3, 4, 5, 6, 7]} | ${'NO'}
    ${4} | ${[1, 3, 5, 7, 9, 11]}   | ${'YES'}
    ${5} | ${[2, 2, 2, 2]}          | ${'NO'}
  `('Base test: $n', ({ array, result }) => {
    expect(isItPossibleToCreateSquare(array)).toBe(result);
  });
});
