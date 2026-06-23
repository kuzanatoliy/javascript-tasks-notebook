const { getPathCount } = require('./A');

describe('626A. Robot Sequence', () => {
  it.each`
    n    | map          | result
    ${1} | ${'URLLDR'}  | ${2}
    ${2} | ${'DLUU'}    | ${0}
    ${3} | ${'RLRLRLR'} | ${12}
  `('Base test: $n', ({ map, result }) => {
    expect(getPathCount(map)).toBe(result);
  });
});
