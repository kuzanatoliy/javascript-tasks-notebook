const { itItPossibleToClear } = require('./A');

describe('1311A. Yet Another Tetris Problem', () => {
  it.each`
    n    | array           | result
    ${1} | ${[1, 1, 3]}    | ${'YES'}
    ${2} | ${[1, 1, 2, 1]} | ${'NO'}
    ${3} | ${[11, 11]}     | ${'YES'}
    ${4} | ${[100]}        | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(itItPossibleToClear(array)).toBe(result);
  });
});
