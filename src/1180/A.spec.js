const { getCountOfCells } = require('./A');

describe('1180A. Alex and a Rhombus', () => {
  it.each`
    n    | num  | result
    ${1} | ${1} | ${1}
    ${2} | ${2} | ${5}
    ${3} | ${3} | ${13}
  `('Base test: $n', ({ num, result }) => {
    expect(getCountOfCells(num)).toBe(result);
  });
});
