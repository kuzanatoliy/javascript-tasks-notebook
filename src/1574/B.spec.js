const { isItPossibleToBuild } = require('./B');

describe('1574B. Combinatorics Homework', () => {
  it.each`
    n    | a    | b    | c    | m    | result
    ${1} | ${2} | ${2} | ${1} | ${0} | ${'YES'}
    ${2} | ${1} | ${1} | ${1} | ${1} | ${'NO'}
    ${3} | ${1} | ${2} | ${3} | ${2} | ${'YES'}
    ${4} | ${1} | ${1} | ${1} | ${0} | ${'YES'}
    ${5} | ${1} | ${1} | ${4} | ${0} | ${'NO'}
  `('Base test: $n', ({ a, b, c, m, result }) => {
    expect(isItPossibleToBuild(a, b, c, m)).toStrictEqual(result);
  });
});
