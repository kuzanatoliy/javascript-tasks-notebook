const { isGood } = require('./A');

describe('2127A. Mix Mex Max', () => {
  it.each`
    n    | arr                       | result
    ${1} | ${[-1, -1, -1]}           | ${'YES'}
    ${2} | ${[1, 1, 1, 1, 0]}        | ${'NO'}
    ${3} | ${[5, 5, 1, -1, -1, 1]}   | ${'NO'}
    ${4} | ${[-1, -1, 0, -1]}        | ${'NO'}
    ${5} | ${[-1, 1, 1, -1]}         | ${'YES'}
    ${6} | ${[3, 3, -1]}             | ${'YES'}
    ${7} | ${[0, 0, 0, 0, 0]}        | ${'NO'}
    ${8} | ${[3, 0, 1, 4, -1, 2, 3]} | ${'NO'}
  `('Base test: $n', ({ arr, result }) => {
    expect(isGood(arr)).toBe(result);
  });
});
