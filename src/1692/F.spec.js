const { isThreeDistinctIndicesExisted } = require('./F');

describe('1692F. 3SUM', () => {
  it.each`
    n    | array                       | result
    ${1} | ${[20, 22, 19, 84]}         | ${'YES'}
    ${2} | ${[1, 11, 1, 2022]}         | ${'YES'}
    ${3} | ${[1100, 1100, 1100, 1111]} | ${'NO'}
    ${4} | ${[12, 34, 56, 78, 90]}     | ${'NO'}
    ${5} | ${[1, 9, 8, 4]}             | ${'YES'}
    ${6} | ${[16, 38, 94, 25, 18, 99]} | ${'YES'}
  `('Base test: $n', ({ array, result }) => {
    expect(isThreeDistinctIndicesExisted(array)).toBe(result);
  });
});
