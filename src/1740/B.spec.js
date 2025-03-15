const { getMinPerimeter } = require('./B');

describe('1740B. Jumbo Extra Cheese 2', () => {
  it.each`
    n    | slices                              | result
    ${1} | ${[[4, 1], [4, 5], [1, 1], [2, 3]]} | ${26}
    ${2} | ${[[2, 4], [2, 6], [2, 3]]}         | ${24}
    ${3} | ${[[2, 65]]}                        | ${134}
  `('Base test: $n', ({ slices, result }) => {
    expect(getMinPerimeter(slices)).toBe(result);
  });
});
