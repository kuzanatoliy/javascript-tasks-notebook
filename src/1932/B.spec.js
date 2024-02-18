const { getYear } = require('./B');

describe('1932B. Chaya Calendar', () => {
  it.each`
    n    | array                            | result
    ${1} | ${[3, 2, 4, 5, 9, 18]}           | ${36}
    ${2} | ${[1, 2, 3, 4, 5]}               | ${5}
    ${3} | ${[1, 1, 1, 1, 1]}               | ${5}
    ${4} | ${[50, 30, 711, 200, 503, 1006]} | ${2012}
  `('Base test: $n', ({ array, result }) => {
    expect(getYear(array)).toBe(result);
  });
});
