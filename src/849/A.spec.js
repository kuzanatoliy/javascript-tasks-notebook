const { isItPossibleToSplit } = require('./A');

describe('849A. Odds and Ends', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 3, 5]}       | ${'YES'}
    ${2} | ${[1, 0, 1, 5, 1]} | ${'YES'}
    ${3} | ${[4, 3, 1]}       | ${'NO'}
    ${4} | ${[3, 9, 9, 3]}    | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToSplit(arr)).toBe(result);
  });
});
