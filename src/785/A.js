const MAP = {
  Tetrahedron: 4,
  Cube: 6,
  Octahedron: 8,
  Dodecahedron: 12,
  Icosahedron: 20,
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
