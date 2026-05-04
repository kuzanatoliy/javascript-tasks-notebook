const { getCountOfStudents } = require('./A');

describe('2204A. Passing the Ball', () => {
  it.each`
    n    | map            | result
    ${1} | ${'RLRL'}      | ${2}
    ${2} | ${'RRRRRL'}    | ${6}
    ${3} | ${'RRLRRRRRL'} | ${3}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfStudents(map)).toBe(result);
  });
});
