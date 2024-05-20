const { getMinCountOfMoves } = require('./E');

describe('1520E. Arranging The Sheep', () => {
  it.each`
    n    | s               | result
    ${1} | ${'**.*..'}     | ${1}
    ${2} | ${'*****'}      | ${0}
    ${3} | ${'.*.'}        | ${0}
    ${4} | ${'...'}        | ${0}
    ${5} | ${'*.*...*.**'} | ${9}
  `('Base test: $n', ({ s, result }) => {
    expect(getMinCountOfMoves(s)).toBe(result);
  });
});
