const { getCountOfVariants } = require('./B');

describe('1267B. Balls of Buma', () => {
  it.each`
    n    | map               | result
    ${1} | ${'BBWWBB'}       | ${3}
    ${2} | ${'BWWB'}         | ${0}
    ${3} | ${'BBWBB'}        | ${0}
    ${4} | ${'OOOWWW'}       | ${0}
    ${5} | ${'WWWOOOOOOWWW'} | ${7}
  `('Base test: $n', ({ map, result }) => {
    expect(getCountOfVariants(map)).toStrictEqual(result);
  });
});
