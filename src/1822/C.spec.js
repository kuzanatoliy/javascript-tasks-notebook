const { getCountOfLayers } = require('./C');

describe('1822C. Bun Lover', () => {
  it.each`
    n    | num           | result
    ${1} | ${4n}         | ${26n}
    ${2} | ${5n}         | ${37n}
    ${3} | ${6n}         | ${50n}
    ${4} | ${179179179n} | ${32105178545472401n}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfLayers(num)).toBe(result);
  });
});
