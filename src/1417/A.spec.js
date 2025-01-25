const { getCountOfOperations } = require('./A');

describe('1417A. Copy-paste', () => {
  it.each`
    n    | arr          | k    | result
    ${1} | ${[1, 1]}    | ${2} | ${1}
    ${2} | ${[1, 2, 3]} | ${5} | ${5}
    ${3} | ${[3, 2, 2]} | ${7} | ${4}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfOperations(arr, k)).toBe(result);
  });
});
