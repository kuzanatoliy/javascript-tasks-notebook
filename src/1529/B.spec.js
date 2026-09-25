const { getMaxLength } = require('./B');

describe('1529B. Sifid and Strange Subsequences', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[-1, -2, 0, 0]}           | ${4}
    ${2} | ${[-3, 4, -2, 0, -4, 6, 1]} | ${5}
    ${3} | ${[0, 5, -3, 2, -5]}        | ${4}
    ${4} | ${[2, 3, 1]}                | ${1}
    ${5} | ${[-3, 0, 2, 0]}            | ${3}
    ${6} | ${[-3, -2, -1, 1, 1, 1]}    | ${4}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxLength(arr)).toBe(result);
  });
});
