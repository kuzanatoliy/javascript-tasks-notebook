const { getMinDistance } = require('./A');

describe('723A. The New Year: Meeting Friends', () => {
  it.each`
    n    | point1 | point2 | point3 | result
    ${1} | ${7}   | ${1}   | ${4}   | ${6}
    ${2} | ${30}  | ${20}  | ${10}  | ${20}
  `('Base test: $n', ({ point1, point2, point3, result }) => {
    expect(getMinDistance(point1, point2, point3)).toBe(result);
  });
});
