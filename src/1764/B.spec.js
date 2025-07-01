const { getMaxCountOfElements } = require('./B');

describe('1764B. Make Array Good', () => {
  it.each`
    n    | arr            | result
    ${1} | ${[1, 2]}      | ${2}
    ${2} | ${[5, 10, 25]} | ${5}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxCountOfElements(arr)).toBe(result);
  });
});
