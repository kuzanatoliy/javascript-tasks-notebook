const { getMinCountOfFlashes } = require('./A');

describe('609A. USB Flash Drives', () => {
  it.each`
    n    | m    | array        | result
    ${1} | ${5} | ${[2, 1, 3]} | ${2}
    ${2} | ${6} | ${[2, 3, 2]} | ${3}
    ${3} | ${5} | ${[5, 10]}   | ${1}
  `('Base test: $n', ({ m, array, result }) => {
    expect(getMinCountOfFlashes(m, array)).toBe(result);
  });
});
