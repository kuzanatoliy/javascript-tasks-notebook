const { getMinCountOfColors } = require('./A');

describe('2002A. Distanced Coloring', () => {
  it.each`
    n    | r    | c    | k        | result
    ${1} | ${3} | ${3} | ${2}     | ${4}
    ${2} | ${5} | ${1} | ${10000} | ${5}
    ${3} | ${7} | ${3} | ${4}     | ${12}
    ${4} | ${3} | ${2} | ${7}     | ${6}
    ${5} | ${8} | ${9} | ${6}     | ${36}
    ${6} | ${2} | ${5} | ${4}     | ${8}
  `('Base test: $n', ({ r, c, k, result }) => {
    expect(getMinCountOfColors(r, c, k)).toBe(result);
  });
});
