const { getCountOfCells } = require('./A');

describe('1031A. Golden Plate', () => {
  it.each`
    n    | h    | w    | k    | result
    ${1} | ${3} | ${3} | ${1} | ${8}
    ${2} | ${7} | ${9} | ${1} | ${28}
    ${3} | ${7} | ${9} | ${2} | ${40}
  `('Base test: $n', ({ h, w, k, result }) => {
    expect(getCountOfCells(h, w, k)).toBe(result);
  });
});
