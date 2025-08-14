const { getCountOfOptions } = require('./A');

describe('129A. Cookies', () => {
  it.each`
    n    | arr                                   | result
    ${1} | ${[1]}                                | ${1}
    ${2} | ${[1, 2, 2, 3, 4, 4, 4, 2, 2, 2]}     | ${8}
    ${3} | ${[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 99]} | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getCountOfOptions(arr)).toBe(result);
  });
});
