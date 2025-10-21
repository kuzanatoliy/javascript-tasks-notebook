const { getMap } = require('./C');

describe('2123C. Prefix Min and Suffix Max', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[1, 3, 5, 4, 7, 2]}    | ${'100011'}
    ${2} | ${[13, 10, 12, 20]}      | ${'1101'}
    ${3} | ${[1, 2, 3, 4, 5, 6, 7]} | ${'1000001'}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMap(arr)).toBe(result);
  });
});
