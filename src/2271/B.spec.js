const { isItPossibleToWin } = require('./B');

describe('2271B. MEX Game', () => {
  it.each`
    n    | k    | arr                         | result
    ${1} | ${1} | ${[2, 0, 0, 1]}             | ${'YES'}
    ${2} | ${1} | ${[0, 1, 0, 1]}             | ${'NO'}
    ${3} | ${2} | ${[1, 2, 0, 1, 0, 0]}       | ${'YES'}
    ${4} | ${2} | ${[0, 0, 1, 1, 2, 2]}       | ${'NO'}
    ${5} | ${2} | ${[0, 1, 1, 0, 0, 2, 0, 1]} | ${'YES'}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(isItPossibleToWin(k, arr)).toBe(result);
  });
});
