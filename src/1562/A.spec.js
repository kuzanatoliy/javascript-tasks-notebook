const { getLargestMod } = require('./A');

describe('1562A. The Miracle and the Sleeper', () => {
  it.each`
    n    | l            | r             | result
    ${1} | ${1}         | ${1}          | ${0}
    ${2} | ${999999999} | ${1000000000} | ${1}
    ${3} | ${8}         | ${26}         | ${12}
    ${4} | ${1}         | ${999999999}  | ${499999999}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getLargestMod(l, r)).toStrictEqual(result);
  });
});
