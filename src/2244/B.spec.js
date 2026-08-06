const { isItPossibleToTransform } = require('./B');

describe('2244B. Nikita and Books', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[1, 2, 3]}       | ${'YES'}
    ${2} | ${[1, 1, 2]}       | ${'NO'}
    ${3} | ${[10, 1, 1]}      | ${'YES'}
    ${4} | ${[2, 2, 2]}       | ${'YES'}
    ${5} | ${[1, 4, 2, 2]}    | ${'NO'}
    ${6} | ${[8, 2, 8, 1, 8]} | ${'YES'}
    ${7} | ${[1, 1, 3, 5]}    | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
