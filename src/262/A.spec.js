const { getCountOfNumbers } = require('./A');

describe('262A. Roma and Lucky Numbers', () => {
  it.each`
    n    | k    | arr              | result
    ${1} | ${4} | ${[1, 2, 4]}     | ${3}
    ${2} | ${2} | ${[447, 44, 77]} | ${2}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(getCountOfNumbers(k, arr)).toBe(result);
  });
});
