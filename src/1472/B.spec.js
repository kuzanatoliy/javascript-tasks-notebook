const { isItPossibleToSplit } = require('./B');

describe('1472A. Cards for Friends', () => {
  it.each`
    n    | candies         | result
    ${1} | ${[1, 1]}       | ${'YES'}
    ${2} | ${[1, 2]}       | ${'NO'}
    ${3} | ${[1, 2, 1, 2]} | ${'YES'}
    ${4} | ${[2, 2, 2]}    | ${'NO'}
    ${5} | ${[2, 1, 2]}    | ${'NO'}
  `('Base test: $n', ({ candies, result }) => {
    expect(isItPossibleToSplit(candies)).toBe(result);
  });
});
