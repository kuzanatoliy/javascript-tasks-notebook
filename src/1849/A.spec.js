const { getMaxCountOfLayers } = require('./A');

describe('1849A. Morning Sandwich', () => {
  it.each`
    n    | b     | c    | h    | result
    ${1} | ${2}  | ${1} | ${1} | ${3}
    ${2} | ${10} | ${1} | ${2} | ${7}
    ${3} | ${3}  | ${7} | ${8} | ${5}
  `('Base test: $n', ({ b, c, h, result }) => {
    expect(getMaxCountOfLayers(b, c, h)).toBe(result);
  });
});
