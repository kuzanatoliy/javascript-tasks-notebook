const { getMinCountOfBoxes } = require('./B');

describe('1584B. Coloring Rectangles', () => {
  it.each`
    n    | num  | m    | result
    ${1} | ${1} | ${3} | ${1}
    ${2} | ${2} | ${2} | ${2}
    ${3} | ${2} | ${5} | ${4}
    ${4} | ${3} | ${5} | ${5}
  `('Base test: $n', ({ num, m, result }) => {
    expect(getMinCountOfBoxes(num, m)).toBe(result);
  });
});
