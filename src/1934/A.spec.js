const { getMaxValue } = require('./A');

describe('1934A. Entertainment in MAC', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[1, 1, 1, 1]}                | ${0}
    ${2} | ${[1, 1, 2, 2, 3]}             | ${6}
    ${3} | ${[5, 1, 3, 2, -3, -1, 10, 3]} | ${38}
    ${4} | ${[3, 3, 1, 1]}                | ${8}
    ${5} | ${[1, 2, 2, -1]}               | ${8}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxValue(arr)).toBe(result);
  });
});
