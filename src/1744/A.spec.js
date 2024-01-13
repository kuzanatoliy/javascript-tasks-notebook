const { checkIfOneIsSum } = require('./A');

describe('1744A. Number Replacement', () => {
  it.each`
    n    | numbers                  | string       | result
    ${1} | ${[2, 3, 2, 4, 1]}       | ${'cacta'}   | ${'YES'}
    ${2} | ${[50]}                  | ${'a'}       | ${'YES'}
    ${3} | ${[11, 22]}              | ${'ab'}      | ${'YES'}
    ${4} | ${[1, 2, 2, 1]}          | ${'aaab'}    | ${'NO'}
    ${5} | ${[1, 2, 3, 2, 1]}       | ${'aaaaa'}   | ${'YES'}
    ${6} | ${[1, 10, 2, 9, 3, 8]}   | ${'azzfdb'}  | ${'YES'}
    ${7} | ${[1, 2, 3, 4, 1, 1, 2]} | ${'abababb'} | ${'NO'}
  `('Base test: $n', ({ numbers, result }) => {
    expect(checkIfOneIsSum(numbers)).toBe(result);
  });
});
