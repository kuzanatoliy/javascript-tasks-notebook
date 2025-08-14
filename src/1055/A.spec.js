const { isItPossibleToReach } = require('./A');

describe('1055A. Elevator or Stairs?', () => {
  it.each`
    n    | way1               | way2               | s    | result
    ${1} | ${[1, 1, 1, 1, 1]} | ${[1, 1, 1, 1, 1]} | ${3} | ${'YES'}
    ${2} | ${[1, 0, 0, 0, 1]} | ${[0, 1, 1, 1, 1]} | ${4} | ${'YES'}
    ${3} | ${[0, 1, 1, 1, 1]} | ${[1, 1, 1, 1, 1]} | ${2} | ${'NO'}
  `('Base test: $n', ({ way1, way2, s, result }) => {
    expect(isItPossibleToReach(way1, way2, s)).toStrictEqual(result);
  });
});
