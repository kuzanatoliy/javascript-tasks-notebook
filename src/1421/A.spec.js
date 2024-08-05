const { getSmallestValue } = require('./A');

describe('1421A. XORwice', () => {
  it.each`
    n    | a       | b       | result
    ${1} | ${6}    | ${12}   | ${10}
    ${2} | ${4}    | ${9}    | ${13}
    ${3} | ${59}   | ${832}  | ${891}
    ${4} | ${28}   | ${14}   | ${18}
    ${5} | ${4925} | ${2912} | ${6237}
    ${6} | ${1}    | ${1}    | ${0}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getSmallestValue(a, b)).toBe(result);
  });
});
