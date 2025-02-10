const { isItPossibleToTurnOn } = require('./A');

describe('615A. Bulbs', () => {
  it.each`
    n    | num  | maps                                 | result
    ${1} | ${4} | ${[[2, 1, 4], [3, 1, 3, 1], [1, 2]]} | ${'YES'}
    ${2} | ${3} | ${[[1, 1], [1, 2], [1, 1]]}          | ${'NO'}
  `('Base test: $n', ({ num, maps, result }) => {
    expect(isItPossibleToTurnOn(num, maps)).toBe(result);
  });
});
