const { getCounts } = require('./A');

describe('2207A. 1-1', () => {
  it.each`
    n    | map            | result
    ${1} | ${'111'}       | ${[2, 3]}
    ${2} | ${'011011'}    | ${[3, 5]}
    ${3} | ${'1011101'}   | ${[4, 7]}
    ${4} | ${'100101101'} | ${[5, 7]}
  `('Base test: $n', ({ map, result }) => {
    expect(getCounts(map)).toStrictEqual(result);
  });
});
