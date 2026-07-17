const { getAdgesSum } = require('./A');

describe('224A. Parallelepiped', () => {
  it.each`
    n    | s1   | s2   | s3   | result
    ${1} | ${1} | ${1} | ${1} | ${12}
    ${2} | ${4} | ${6} | ${6} | ${28}
  `('Base test: $n', ({ s1, s2, s3, result }) => {
    expect(getAdgesSum(s1, s2, s3)).toBe(result);
  });
});
