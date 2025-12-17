const { getCountOfRounds } = require('./A');

describe('2161A. Round Trip', () => {
  it.each`
    n    | r       | x       | d      | map           | result
    ${1} | ${2100} | ${2100} | ${5}   | ${'222'}      | ${0}
    ${2} | ${2098} | ${2100} | ${5}   | ${'111211'}   | ${6}
    ${3} | ${2115} | ${2100} | ${226} | ${'2211121'}  | ${5}
    ${4} | ${0}    | ${10}   | ${4}   | ${'22111121'} | ${8}
  `('Base test: $n', ({ r, x, d, map, result }) => {
    expect(getCountOfRounds(r, x, d, map)).toBe(result);
  });
});
