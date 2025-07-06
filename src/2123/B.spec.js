const { isItPossibleToSurvive } = require('./B');

describe('2123B. Tournament', () => {
  it.each`
    n    | j    | k    | arr                   | result
    ${1} | ${2} | ${3} | ${[3, 2, 4, 4, 1]}    | ${'YES'}
    ${2} | ${4} | ${1} | ${[5, 3, 4, 5, 2]}    | ${'YES'}
    ${3} | ${1} | ${1} | ${[1, 2, 3, 4, 5, 6]} | ${'NO'}
  `('Base test: $n', ({ j, k, arr, result }) => {
    expect(isItPossibleToSurvive(j, k, arr)).toBe(result);
  });
});
