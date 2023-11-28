const { getCommonFaces } = require('./A');

describe('785A. Anton and Polyhedrons', () => {
  it.each`
    n    | figures                                                   | result
    ${1} | ${['Icosahedron', 'Cube', 'Tetrahedron', 'Dodecahedron']} | ${42}
    ${2} | ${['Dodecahedron', 'Octahedron', 'Octahedron']}           | ${28}
  `('Base test: $n', ({ figures, result }) => {
    expect(getCommonFaces(figures)).toBe(result);
  });
});
