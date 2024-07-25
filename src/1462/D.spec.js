const { getMinCountOfOperations } = require('./D');

describe('1462D. Add to Neighbour and Remove', () => {
  it.each`
    n    | array              | result
    ${1} | ${[3, 1, 6, 6, 2]} | ${4}
    ${2} | ${[1, 2, 2, 1]}    | ${2}
    ${3} | ${[2, 2, 2]}       | ${0}
    ${4} | ${[6, 3, 2, 1]}    | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getMinCountOfOperations(array)).toBe(result);
  });
});
