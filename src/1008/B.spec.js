const { isItPossibleToTransform } = require('./B');

describe('1008B. Turn the Rectangles', () => {
  it.each`
    n    | rectangles                  | result
    ${1} | ${[[3, 4], [4, 6], [3, 5]]} | ${'YES'}
    ${2} | ${[[3, 4], [5, 5]]}         | ${'NO'}
  `('Base test: $n', ({ rectangles, result }) => {
    expect(isItPossibleToTransform(rectangles)).toBe(result);
  });
});
