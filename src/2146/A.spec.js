const { getLength } = require('./A');

describe('2146A. Equal Occurrences', () => {
  it.each`
    n    | arr                                              | result
    ${1} | ${[1, 1, 4, 4, 4]}                               | ${4}
    ${2} | ${[1, 2]}                                        | ${2}
    ${3} | ${[1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5]} | ${9}
    ${4} | ${[3, 3, 3, 3, 3]}                               | ${5}
  `('Base test: $n', ({ arr, result }) => {
    expect(getLength(arr)).toBe(result);
  });
});
