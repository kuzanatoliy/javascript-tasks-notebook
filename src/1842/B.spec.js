const { isItPossibleToConstruct } = require('./B');

describe('1842B. Tenzing and Books', () => {
  it.each`
    n    | x    | arrA               | arrB               | arrC               | result
    ${1} | ${7} | ${[1, 2, 3, 4, 5]} | ${[5, 4, 3, 2, 1]} | ${[1, 3, 5, 7, 9]} | ${'YES'}
    ${2} | ${2} | ${[3, 2, 3, 4, 5]} | ${[5, 4, 3, 2, 1]} | ${[3, 3, 5, 7, 9]} | ${'NO'}
    ${3} | ${0} | ${[1, 2, 3]}       | ${[3, 2, 1]}       | ${[2, 2, 2]}       | ${'YES'}
    ${4} | ${3} | ${[5]}             | ${[2]}             | ${[1]}             | ${'YES'}
  `('Base test: $n', ({ x, arrA, arrB, arrC, result }) => {
    expect(isItPossibleToConstruct(x, arrA, arrB, arrC)).toBe(result);
  });
});
