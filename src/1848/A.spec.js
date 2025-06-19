const { isItPossibleToSurvive } = require('./A');

describe('1848A. Vika and Her Friends', () => {
  it.each`
    n    | main      | friends                             | result
    ${1} | ${[1, 1]} | ${[[1, 2]]}                         | ${'YES'}
    ${2} | ${[1, 1]} | ${[[2, 2], [2, 2]]}                 | ${'NO'}
    ${3} | ${[1, 1]} | ${[[1, 2]]}                         | ${'YES'}
    ${4} | ${[3, 3]} | ${[[1, 1], [1, 5], [5, 1], [5, 5]]} | ${'NO'}
    ${5} | ${[1, 1]} | ${[[2, 1], [1, 2]]}                 | ${'YES'}
    ${6} | ${[1, 2]} | ${[[3, 3]]}                         | ${'YES'}
  `('Base test: $n', ({ main, friends, result }) => {
    expect(isItPossibleToSurvive(main, friends)).toBe(result);
  });
});
