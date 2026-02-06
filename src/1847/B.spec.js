const { getCountOfGroups } = require('./B');

describe('1847B. Hamon Odyssey', () => {
  it.each`
    n    | array              | result
    ${1} | ${[1, 2, 3]}       | ${1}
    ${2} | ${[2, 3, 1, 5, 2]} | ${2}
    ${3} | ${[5, 7, 12, 6]}   | ${1}
    ${4} | ${[0, 0]}          | ${2}
  `('Base test: $n', ({ array, result }) => {
    expect(getCountOfGroups(array)).toBe(result);
  });
});
