const { getCountOfDays } = require('./A');

describe("879A. Borya's Diagnosis", () => {
  it.each`
    n    | doctors                     | result
    ${1} | ${[[2, 2], [1, 2], [2, 2]]} | ${4}
    ${2} | ${[[10, 1], [6, 5]]}        | ${11}
  `('Base test: $n', ({ doctors, result }) => {
    expect(getCountOfDays(doctors)).toBe(result);
  });
});
