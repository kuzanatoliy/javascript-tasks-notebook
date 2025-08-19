const { getCountOfHotels } = require('./A');

describe('1004A. Sonya and Hotels', () => {
  it.each`
    n    | arr                   | k    | result
    ${1} | ${[-3, 2, 9, 16]}     | ${3} | ${6}
    ${2} | ${[4, 8, 11, 18, 19]} | ${2} | ${5}
  `('Base test: $n', ({ arr, k, result }) => {
    expect(getCountOfHotels(arr, k)).toBe(result);
  });
});
