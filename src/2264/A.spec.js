const { isItPossibleToTransform } = require('./A');

describe('2264A. Rumb Needs a Hand', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[1]}                | ${'YES'}
    ${2} | ${[4, 2, 3, 1]}       | ${'YES'}
    ${3} | ${[3, 4, 1, 2]}       | ${'NO'}
    ${5} | ${[2, 1, 3, 5, 4]}    | ${'NO'}
    ${6} | ${[1, 6, 3, 4, 5, 2]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItPossibleToTransform(arr)).toBe(result);
  });
});
