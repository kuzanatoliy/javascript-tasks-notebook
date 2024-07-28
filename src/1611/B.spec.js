const { getCountOfTeams } = require('./B');

describe('1611B. Team Composition: Programmers and Mathematicians', () => {
  it.each`
    n    | a             | b             | result
    ${1} | ${5}          | ${5}          | ${2}
    ${2} | ${10}         | ${1}          | ${1}
    ${3} | ${2}          | ${3}          | ${1}
    ${4} | ${0}          | ${0}          | ${0}
    ${5} | ${17}         | ${2}          | ${2}
    ${6} | ${1000000000} | ${1000000000} | ${500000000}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfTeams(a, b)).toBe(result);
  });
});
