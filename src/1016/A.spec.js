const { getCountsOfTurns } = require('./A');

describe('1016A. Death Note', () => {
  it.each`
    n    | arr               | m      | result
    ${1} | ${[3, 7, 9]}      | ${5}   | ${[0, 2, 1]}
    ${2} | ${[10, 9, 19, 2]} | ${20}  | ${[0, 0, 1, 1]}
    ${3} | ${[99]}           | ${100} | ${[0]}
  `('Base test: $n', ({ arr, m, result }) => {
    expect(getCountsOfTurns(arr, m)).toStrictEqual(result);
  });
});
