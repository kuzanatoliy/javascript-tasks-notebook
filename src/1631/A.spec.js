const { getMaxValue } = require('./A');

describe('1631A. Min Max Swap', () => {
  it.each`
    n    | array1                | array2                | result
    ${1} | ${[1, 2, 6, 5, 1, 2]} | ${[3, 4, 3, 2, 2, 5]} | ${18}
    ${2} | ${[3, 3, 3]}          | ${[3, 3, 3]}          | ${9}
    ${3} | ${[1, 2]}             | ${[2, 1]}             | ${2}
  `('Base test: $n', ({ array1, array2, result }) => {
    expect(getMaxValue(array1, array2)).toBe(result);
  });
});
