const { calc } = require('./A');

describe('486A. Calculating Function', () => {
  it.each`
    n    | count | result
    ${1} | ${4}  | ${2}
    ${2} | ${5}  | ${-3}
  `('Base test: $n', ({ count, result }) => {
    expect(calc(count)).toBe(result);
  });
});
