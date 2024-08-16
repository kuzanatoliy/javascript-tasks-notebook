const { isItPossibleToTakeShower } = require('./C');

describe('1999C. Showering', () => {
  it.each`
    n    | duration | limit | intervals                    | result
    ${1} | ${3}     | ${10} | ${[[3, 5], [6, 8], [9, 10]]} | ${'YES'}
    ${2} | ${3}     | ${10} | ${[[1, 2], [3, 5], [6, 7]]}  | ${'YES'}
    ${3} | ${3}     | ${10} | ${[[1, 2], [3, 5], [6, 8]]}  | ${'NO'}
    ${4} | ${4}     | ${10} | ${[[1, 2], [6, 7], [8, 9]]}  | ${'YES'}
  `('Base test: $n', ({ duration, limit, intervals, result }) => {
    expect(isItPossibleToTakeShower(duration, limit, intervals)).toBe(result);
  });
});
