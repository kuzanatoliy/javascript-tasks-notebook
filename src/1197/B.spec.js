const { isItPossibleToPlace } = require('./B');

describe('1197A. DIY Wooden Ladder', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 3, 4, 2]} | ${'YES'}
    ${2} | ${[3, 1, 2]}    | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToPlace(arr)).toBe(result);
  });
});
