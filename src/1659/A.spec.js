const { buildMap } = require('./A');

describe('1659A. Red Versus Blue', () => {
  it.each`
    n    | a     | b    | result
    ${1} | ${4}  | ${3} | ${'RBRBRBR'}
    ${2} | ${5}  | ${1} | ${'RRRBRR'}
    ${3} | ${13} | ${6} | ${'RRBRRBRRBRRBRRBRRBR'}
    ${4} | ${2}  | ${1} | ${'RBR'}
    ${5} | ${6}  | ${4} | ${'RRBRBRBRBR'}
    ${6} | ${6}  | ${5} | ${'RBRBRBRBRBR'}
    ${7} | ${9}  | ${1} | ${'RRRRRBRRRR'}
    ${8} | ${8}  | ${2} | ${'RRRBRRRBRR'}
    ${9} | ${9}  | ${2} | ${'RRRBRRRBRRR'}
  `('Base test: $n', ({ a, b, result }) => {
    expect(buildMap(a, b)).toBe(result);
  });
});
