const { isItPossibleToWin } = require('./A');

describe('1598B. Groups', () => {
  it.each`
    n    | list                                                                    | result
    ${1} | ${[[1, 0, 0, 1, 0], [0, 1, 0, 0, 1], [0, 0, 0, 1, 0], [0, 1, 0, 1, 0]]} | ${'YES'}
    ${2} | ${[[0, 0, 0, 1, 0], [0, 0, 0, 1, 0]]}                                   | ${'YES'}
  `('Base test: $n', ({ list, result }) => {
    expect(isItPossibleToWin(list)).toBe(result);
  });
});
