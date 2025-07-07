const { getMaxCountOfVisitors } = require('./A');

describe('1313A. Fast Food Restaurant', () => {
  it.each`
    n    | a    | b    | c    | result
    ${1} | ${1} | ${2} | ${1} | ${3}
    ${2} | ${0} | ${0} | ${0} | ${0}
    ${3} | ${9} | ${1} | ${7} | ${4}
    ${4} | ${2} | ${2} | ${3} | ${5}
    ${5} | ${2} | ${3} | ${2} | ${5}
    ${6} | ${3} | ${2} | ${2} | ${5}
    ${7} | ${4} | ${4} | ${4} | ${7}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getMaxCountOfVisitors(a, b, c)).toBe(result);
  });
});
