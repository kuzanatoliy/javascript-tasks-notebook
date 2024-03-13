const { getLength } = require('./B');

describe('1325B. CopyCopyCopyCopyCopy', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[3, 2, 1]}          | ${3}
    ${2} | ${[3, 1, 4, 1, 5, 9]} | ${5}
  `('Base test: $n', ({ array, result }) => {
    expect(getLength(array)).toBe(result);
  });
});
