const { couldBeSatisfied } = require('./A');

describe('1798A. Showstopper', () => {
  it.each`
    n    | numbers1                       | numbers2                       | result
    ${1} | ${[7, 9, 7]}                   | ${[7, 6, 9]}                   | ${'Yes'}
    ${2} | ${[10, 10, 15, 15]}            | ${[10, 16, 15, 15]}            | ${'No'}
    ${3} | ${[100, 99]}                   | ${[99, 100]}                   | ${'Yes'}
    ${4} | ${[1]}                         | ${[1]}                         | ${'Yes'}
    ${5} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9]} | ${[9, 9, 9, 9, 9, 9, 6, 6, 6]} | ${'Yes'}
    ${6} | ${[1, 1, 2, 2, 1, 1, 2]}       | ${[1, 2, 1, 2, 1, 2, 1]}       | ${'No'}
    ${7} | ${[30, 4]}                     | ${[5, 30]}                     | ${'No'}
  `('Base test: $n', ({ numbers1, numbers2, result }) => {
    expect(couldBeSatisfied(numbers1, numbers2)).toBe(result);
  });
});
