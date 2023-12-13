const { getAmount } = require('./A');

describe('758A. Holiday Of Equality', () => {
  it.each`
    n    | citizens           | result
    ${1} | ${[0, 1, 2, 3, 4]} | ${10}
    ${2} | ${[1, 1, 0, 1, 1]} | ${1}
    ${3} | ${[1, 3, 1]}       | ${4}
    ${4} | ${[12]}            | ${0}
  `('Base test: $n', ({ citizens, wayTime, result }) => {
    expect(getAmount(citizens, wayTime)).toBe(result);
  });
});
