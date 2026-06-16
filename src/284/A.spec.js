const { getCount } = require('./A');

describe('284A. Cows and Primitive Roots', () => {
  it.each`
    n    | num  | result
    ${1} | ${3} | ${1}
    ${2} | ${5} | ${2}
  `('Base test: $n', ({ num, result }) => {
    expect(getCount(num)).toBe(result);
  });
});
