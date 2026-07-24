const { isItPossibleToTransform } = require('./B');

describe('2050B. Transfusion', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[3, 2, 1]}       | ${'YES'}
    ${2} | ${[1, 1, 3]}       | ${'NO'}
    ${3} | ${[1, 2, 5, 4]}    | ${'YES'}
    ${4} | ${[1, 6, 6, 1]}    | ${'NO'}
    ${5} | ${[6, 2, 1, 4, 2]} | ${'YES'}
    ${6} | ${[1, 4, 2, 1]}    | ${'NO'}
    ${7} | ${[3, 1, 2, 1, 3]} | ${'NO'}
    ${8} | ${[2, 4, 2]}       | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
