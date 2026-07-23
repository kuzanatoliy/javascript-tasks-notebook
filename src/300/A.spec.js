const { getGroups } = require('./A');

describe('300A. Array', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[-1, 2, 0]}      | ${[[-1], [2], [0]]}
    ${2} | ${[-1, -2, -3, 0]} | ${[[-1], [-3, -2], [0]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getGroups(arr)).toStrictEqual(result);
  });
});
