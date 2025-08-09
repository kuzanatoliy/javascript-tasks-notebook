const { isItPossiblePourCola } = require('./A');

describe('892A. Greed', () => {
  it.each`
    n    | arrA               | arrB                | result
    ${1} | ${[3, 5]}          | ${[3, 6]}           | ${'YES'}
    ${2} | ${[6, 8, 9]}       | ${[6, 10, 12]}      | ${'NO'}
    ${3} | ${[0, 0, 5, 0, 0]} | ${[1, 1, 8, 10, 5]} | ${'YES'}
    ${4} | ${[4, 1, 0, 3]}    | ${[5, 2, 2, 3]}     | ${'YES'}
  `('Base test: $n', ({ arrA, arrB, result }) => {
    expect(isItPossiblePourCola(arrA, arrB)).toBe(result);
  });
});
