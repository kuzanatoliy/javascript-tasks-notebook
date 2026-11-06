const { getPairsCount } = require('./B');

describe('1287B. Yet Another Meme Problem', () => {
  it.each`
    n    | a      | b           | result
    ${1} | ${1}   | ${11}       | ${1}
    ${2} | ${4}   | ${2}        | ${0}
    ${3} | ${191} | ${31415926} | ${1337}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getPairsCount(a, b)).toBe(result);
  });
});
