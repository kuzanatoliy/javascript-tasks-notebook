const { isItPossibleToWin } = require('./A');

describe('2117A. False Alarm', () => {
  it.each`
    n    | arr                               | x    | result
    ${1} | ${[0, 1, 1, 0]}                   | ${2} | ${'YES'}
    ${2} | ${[1, 0, 1, 1, 0, 0]}             | ${3} | ${'NO'}
    ${3} | ${[1, 1, 1, 0, 0, 1, 1, 1]}       | ${8} | ${'YES'}
    ${4} | ${[1]}                            | ${2} | ${'YES'}
    ${5} | ${[1, 0, 1, 0, 1]}                | ${1} | ${'NO'}
    ${6} | ${[0, 0, 0, 1, 1, 0, 1]}          | ${4} | ${'YES'}
    ${7} | ${[0, 1, 0, 0, 1, 0, 0, 1, 0, 0]} | ${3} | ${'NO'}
  `('Base test: $n', ({ arr, x, result }) => {
    expect(isItPossibleToWin(arr, x)).toBe(result);
  });
});
