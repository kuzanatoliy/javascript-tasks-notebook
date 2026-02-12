const { getCountOfTurnedOffLighters } = require('./B');

describe('1077B. Disturbed People', () => {
  it.each`
    n    | arr                               | result
    ${1} | ${[1, 1, 0, 1, 1, 0, 1, 0, 1, 0]} | ${2}
    ${2} | ${[1, 1, 0, 0, 0]}                | ${0}
    ${3} | ${[1, 1, 1, 1]}                   | ${0}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfTurnedOffLighters(arr)).toBe(result);
  });
});
