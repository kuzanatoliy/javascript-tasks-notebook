const { getLastNumber } = require('./A');

describe('1991A. Question Marks', () => {
  it.each`
    n    | arr                      | result
    ${1} | ${[6]}                   | ${6}
    ${2} | ${[1, 3, 2]}             | ${2}
    ${3} | ${[4, 7, 4, 2, 9]}       | ${9}
    ${4} | ${[3, 1, 4, 1, 5, 9, 2]} | ${5}
  `('Base test: $n', ({ arr, result }) => {
    expect(getLastNumber(arr)).toBe(result);
  });
});
