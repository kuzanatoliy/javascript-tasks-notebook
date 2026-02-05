const { getCountOfPoints } = require('./B');

describe('1809B. Points on Plane', () => {
  it.each`
    n    | map                    | result
    ${1} | ${1n}                  | ${0n}
    ${2} | ${3n}                  | ${1n}
    ${3} | ${5n}                  | ${2n}
    ${4} | ${975461057789971042n} | ${987654321n}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfPoints(map)).toBe(result);
  });
});
