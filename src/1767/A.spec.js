const { isItPossibleToCut } = require('./A');

describe('1767A. Cut the Triangle', () => {
  it.each`
    n    | points                      | result
    ${1} | ${[[4, 7], [6, 8], [3, 5]]} | ${'YES'}
    ${2} | ${[[4, 5], [4, 7], [6, 8]]} | ${'YES'}
    ${3} | ${[[5, 8], [1, 8], [2, 5]]} | ${'YES'}
    ${4} | ${[[3, 6], [6, 6], [6, 3]]} | ${'NO'}
  `('Base test: $n', ({ points, result }) => {
    expect(isItPossibleToCut(points)).toStrictEqual(result);
  });
});
