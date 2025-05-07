const { getCountOfOperations } = require('./B');

describe('1206A. Cards', () => {
  it.each`
    n    | arr                  | result
    ${1} | ${[-1, 1]}           | ${2}
    ${2} | ${[0, 0, 0, 0]}      | ${4}
    ${3} | ${[-5, -3, 5, 3, 0]} | ${13}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOperations(arr)).toBe(result);
  });
});
