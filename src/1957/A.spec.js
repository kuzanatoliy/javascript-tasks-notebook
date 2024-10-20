const { getCountOfPolygons } = require('./A');

describe('1957A. Stickogon', () => {
  it.each`
    n    | array                          | result
    ${1} | ${[1]}                         | ${0}
    ${2} | ${[1, 1]}                      | ${0}
    ${3} | ${[2, 2, 3, 3, 3, 3]}          | ${1}
    ${3} | ${[4, 2, 2, 2, 2, 4, 2, 4, 4]} | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfPolygons(array)).toBe(result);
  });
});
