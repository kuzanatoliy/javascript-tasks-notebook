const { getOperations } = require('./A');

describe('1917A. Least Product', () => {
  it.each`
    n    | arr                     | result
    ${1} | ${[155]}                | ${[1, [1, 0]]}
    ${2} | ${[2, 8, -1, 3]}        | ${[0]}
    ${3} | ${[-1, 0, -2, -5]}      | ${[0]}
    ${4} | ${[-15, -75, -25, -30]} | ${[1, [1, 0]]}
  `('Base test: $n', ({ arr, result }) => {
    expect(getOperations(arr)).toStrictEqual(result);
  });
});
