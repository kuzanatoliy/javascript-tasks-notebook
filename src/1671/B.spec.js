const { isItPossibleToTransform } = require('./B');

describe('1671B. Consecutive Points Segment', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 4]}       | ${'YES'}
    ${2} | ${[1, 2, 3]}    | ${'YES'}
    ${3} | ${[1, 2, 3, 7]} | ${'NO'}
    ${4} | ${[1000000]}    | ${'YES'}
    ${5} | ${[2, 5, 6]}    | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
