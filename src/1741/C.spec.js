const { getMinLength } = require('./C');

describe('1741C. Minimize the Thickness', () => {
  it.each`
    n    | arr                          | result
    ${1} | ${[55, 45, 30, 30, 40, 100]} | ${3}
    ${2} | ${[10, 23, 7, 13]}           | ${4}
    ${3} | ${[10, 55, 35, 30, 65]}      | ${2}
    ${4} | ${[4, 1, 1, 1, 1, 4]}        | ${3}
    ${5} | ${[2, 4, 4, 1, 8, 3]}        | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMinLength(arr)).toBe(result);
  });
});
