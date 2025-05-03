const { getCountOfElems } = require('./A');

describe("768A. Oath of the Night's Watch", () => {
  it.each`
    n    | arr          | result
    ${1} | ${[1, 5]}    | ${0}
    ${2} | ${[1, 2, 5]} | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfElems(arr)).toBe(result);
  });
});
