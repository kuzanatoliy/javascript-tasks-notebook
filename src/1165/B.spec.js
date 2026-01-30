const { getMaxCountOfDays } = require('./B');

describe('1165B. Polycarp Training', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[3, 1, 4, 1]}    | ${3}
    ${2} | ${[1, 1, 1]}       | ${1}
    ${3} | ${[1, 1, 1, 2, 2]} | ${2}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxCountOfDays(arr)).toBe(result);
  });
});
