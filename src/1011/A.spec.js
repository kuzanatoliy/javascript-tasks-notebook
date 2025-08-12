const { getRoketWeight } = require('./A');

describe('1011A. Stages', () => {
  it.each`
    n    | map               | k    | result
    ${1} | ${'xyabd'}        | ${3} | ${29}
    ${2} | ${'problem'}      | ${4} | ${34}
    ${3} | ${'ab'}           | ${2} | ${-1}
    ${4} | ${'abaabbaaabbb'} | ${1} | ${1}
  `('Base test: $n', ({ map, k, result }) => {
    expect(getRoketWeight(map, k)).toBe(result);
  });
});
