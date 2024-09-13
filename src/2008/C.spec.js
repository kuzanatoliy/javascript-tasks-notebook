const { getLength } = require('./C');

describe('2008C. Longest Good Array', () => {
  it.each`
    n    | l     | r             | result
    ${1} | ${1}  | ${2}          | ${2}
    ${2} | ${1}  | ${5}          | ${3}
    ${3} | ${2}  | ${2}          | ${1}
    ${4} | ${10} | ${20}         | ${5}
    ${5} | ${1}  | ${1000000000} | ${44721}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getLength(l, r)).toBe(result);
  });
});
