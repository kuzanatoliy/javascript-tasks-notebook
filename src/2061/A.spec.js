const { getMaxCountOfPoints } = require('./A');

describe('2061A. Kevin and Arithmetic', () => {
  it.each`
    n    | arr                                              | result
    ${1} | ${[1]}                                           | ${0}
    ${2} | ${[1, 2]}                                        | ${2}
    ${3} | ${[2, 4, 6]}                                     | ${1}
    ${4} | ${[1000000000, 999999999, 999999998, 999999997]} | ${3}
    ${5} | ${[3, 1, 4, 1, 5, 9, 2, 6, 5, 3]}                | ${8}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxCountOfPoints(arr)).toBe(result);
  });
});
