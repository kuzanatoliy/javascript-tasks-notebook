const { getCountOfCrossMoves } = require('./B');

describe('935B. Fafa and the Gates', () => {
  it.each`
    n    | map          | result
    ${1} | ${'U'}       | ${0}
    ${2} | ${'RURUUR'}  | ${1}
    ${3} | ${'URRRUUU'} | ${2}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfCrossMoves(map)).toBe(result);
  });
});
