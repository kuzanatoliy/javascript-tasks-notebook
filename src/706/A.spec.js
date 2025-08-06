const { getDelay } = require('./A');

describe('706A. Beru-taxi', () => {
  it.each`
    n    | a    | b    | params                                  | result
    ${1} | ${0} | ${0} | ${[[2, 0, 1], [0, 2, 2]]}               | ${1}
    ${2} | ${1} | ${3} | ${[[3, 3, 2], [-2, 3, 6], [-2, 7, 10]]} | ${0.5}
    ${3} | ${0} | ${0} | ${[[3, 4, 5]]}                          | ${1}
  `('Base test: $n', ({ a, b, params, result }) => {
    expect(getDelay(a, b, params)).toBe(result);
  });
});
