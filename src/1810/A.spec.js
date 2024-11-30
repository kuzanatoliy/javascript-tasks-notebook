const { isItBeautiful } = require('./A');

describe('1810A. Beautiful Sequence', () => {
  it.each`
    n    | arr                   | result
    ${1} | ${[3, 2, 1]}          | ${'YES'}
    ${2} | ${[2, 4, 3, 5]}       | ${'YES'}
    ${3} | ${[2, 3, 5, 5, 6]}    | ${'NO'}
    ${4} | ${[3, 1]}             | ${'YES'}
    ${5} | ${[2, 4, 5, 2, 3]}    | ${'YES'}
    ${6} | ${[5, 6, 7, 8]}       | ${'NO'}
    ${7} | ${[6, 5, 4, 3, 2, 1]} | ${'YES'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isItBeautiful(arr)).toBe(result);
  });
});
