const { getDelimiter } = require('./A');

describe('1788A. One and Two', () => {
  it.each`
    n    | array                 | result
    ${1} | ${[2, 2, 1, 2, 1, 2]} | ${2}
    ${2} | ${[1, 2, 1]}          | ${-1}
    ${3} | ${[1, 1, 1, 1]}       | ${1}
  `('Base test: $n', ({ array, result }) => {
    expect(getDelimiter(array)).toBe(result);
  });
});
