const { getX } = require('./B');

describe('1826B. Lunatic Never Content', () => {
  it.each`
    n    | arr                         | result
    ${1} | ${[1, 2]}                   | ${1}
    ${2} | ${[3, 0, 1, 2, 0, 3, 2, 1]} | ${2}
    ${3} | ${[0]}                      | ${0}
    ${4} | ${[100, 1, 1000000000]}     | ${999999900}
  `('Base test: $n', ({ arr, result }) => {
    expect(getX(arr)).toBe(result);
  });
});
