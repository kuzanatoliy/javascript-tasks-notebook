const { isItPossibleToWin } = require('./A');

describe('1990A. Submission Bait', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[2, 1]}       | ${'YES'}
    ${2} | ${[1, 1]}       | ${'NO'}
    ${3} | ${[3, 3, 3]}    | ${'YES'}
    ${4} | ${[3, 3, 4, 4]} | ${'NO'}
    ${5} | ${[1, 2, 2, 2]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToWin(arr)).toBe(result);
  });
});
