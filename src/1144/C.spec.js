const { isItPossibleToSplit } = require('./C');

describe('1144C. Two Shuffled Sequences', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[7, 2, 7, 3, 3, 1, 4]} | ${['YES', [1, 2, 3, 4, 7], [7, 3]]}
    ${2} | ${[4, 3, 1, 5, 3]}       | ${['YES', [1, 3, 4, 5], [3]]}
    ${3} | ${[1, 1, 2, 1, 2]}       | ${['NO']}
    ${4} | ${[0, 1, 2, 3, 4]}       | ${['YES', [0, 1, 2, 3, 4], []]}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToSplit(arr)).toStrictEqual(result);
  });
});
