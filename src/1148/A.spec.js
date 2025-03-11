const { getMaxLength } = require('./A');

describe('1148A. Another One Bites The Dust', () => {
  it.each`
    n    | a             | b             | c             | result
    ${1} | ${1}          | ${1}          | ${1}          | ${4}
    ${2} | ${2}          | ${1}          | ${2}          | ${7}
    ${3} | ${3}          | ${5}          | ${2}          | ${11}
    ${4} | ${2}          | ${2}          | ${1}          | ${6}
    ${5} | ${1000000000} | ${1000000000} | ${1000000000} | ${4000000000}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(getMaxLength(a, b, c)).toBe(result);
  });
});
