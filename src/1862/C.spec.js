const { isSymetrical } = require('./C');

describe('1862C. Flower City Fence', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[5, 4, 3, 2, 1]} | ${'YES'}
    ${2} | ${[3, 1, 1]}       | ${'YES'}
    ${3} | ${[4, 2, 1]}       | ${'NO'}
    ${4} | ${[2]}             | ${'NO'}
    ${5} | ${[5, 3, 3, 1, 1]} | ${'YES'}
    ${6} | ${[5, 5, 5, 3, 3]} | ${'YES'}
    ${7} | ${[6, 1]}          | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isSymetrical(arr)).toBe(result);
  });
});
