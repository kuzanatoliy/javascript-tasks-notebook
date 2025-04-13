const { getPerimeter } = require('./F');

describe('1249F. Data Center', () => {
  it.each`
    n    | num   | result
    ${1} | ${36} | ${24}
    ${2} | ${13} | ${28}
    ${3} | ${1}  | ${4}
  `('Base test: $n', ({ num, result }) => {
    expect(getPerimeter(num)).toBe(result);
  });
});
