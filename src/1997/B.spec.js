const { getCellCount } = require('./B');

describe('1997A. Strong Password', () => {
  it.each`
    n    | map                           | result
    ${1} | ${['.......x', '.x.xx...']}   | ${1}
    ${2} | ${['..', '..']}               | ${0}
    ${3} | ${['xxx', 'xxx']}             | ${0}
    ${4} | ${['..x.x.x.x', 'x.......x']} | ${2}
  `('Base test: $n', ({ map, result }) => {
    expect(getCellCount(map)).toBe(result);
  });
});
