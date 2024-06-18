const { getCountOfTriangles } = require('./C');

describe('1355C. Count Triangles', () => {
  it.each`
    n    | a         | b         | c         | d         | result
    ${1} | ${1}      | ${2}      | ${3}      | ${4}      | ${4}
    ${2} | ${1}      | ${2}      | ${2}      | ${5}      | ${3}
    ${3} | ${500000} | ${500000} | ${500000} | ${500000} | ${1}
  `('Base test: $n', ({ a, b, c, d, result }) => {
    expect(getCountOfTriangles(a, b, c, d)).toBe(result);
  });
});
