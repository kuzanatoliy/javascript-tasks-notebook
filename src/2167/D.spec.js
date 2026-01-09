const { getResult } = require('./D');

describe('2167D. Yet Another Array Problem', () => {
  it.each`
    n    | arr               | result
    ${1} | ${[1]}            | ${2}
    ${2} | ${[6, 6, 12, 12]} | ${5}
    ${3} | ${[24, 120, 120]} | ${5}
    ${4} | ${[2, 4, 6, 10]}  | ${3}
  `('Base test: $n', ({ arr, result }) => {
    expect(getResult(arr)).toBe(result);
  });
});
