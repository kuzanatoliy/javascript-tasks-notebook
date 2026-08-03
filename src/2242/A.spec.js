const { isItPossibleToBuildString } = require('./A');

describe('2242A. Bigrams', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1]}          | ${'NO'}
    ${2} | ${[3]}          | ${'YES'}
    ${3} | ${[4]}          | ${'YES'}
    ${4} | ${[2, 1]}       | ${'NO'}
    ${5} | ${[3, 2]}       | ${'YES'}
    ${6} | ${[1, 1, 2]}    | ${'NO'}
    ${7} | ${[1, 1, 2, 2]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToBuildString(arr)).toBe(result);
  });
});
