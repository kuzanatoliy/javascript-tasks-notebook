const MAP = {
  Cube: 6,
  Dodecahedron: 12,
  Icosahedron: 20,
  Octahedron: 8,
  Tetrahedron: 4,
};

module.exports = {
  getCommonFaces: (figures) => {
    let sum = 0;
    for (let i = 0; i < figures.length; i++) {
      sum += MAP[figures[i]];
    }
    return sum;
  },
};
