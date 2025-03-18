const { getMaxValue } = require('./B');

describe('2074A. Draw a Square', () => {
  it.each`
    n    | arr                            | result
    ${1} | ${[10]}                        | ${10}
    ${2} | ${[998, 244, 353]}             | ${1593}
    ${3} | ${[1, 2, 3, 4, 5]}             | ${11}
    ${4} | ${[9, 9, 8, 2, 4, 4, 3, 5, 3]} | ${39}
  `('Base test: $n', ({ arr, result }) => {
    expect(getMaxValue(arr)).toBe(result);
  });
});
