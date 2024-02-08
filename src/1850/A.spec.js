const { mightGetTen } = require('./A');

describe('1850A. To My Critics', () => {
  it.each`
    n    | a    | b    | c    | result
    ${1} | ${8} | ${1} | ${2} | ${'YES'}
    ${2} | ${4} | ${4} | ${5} | ${'NO'}
    ${3} | ${9} | ${9} | ${9} | ${'YES'}
    ${3} | ${0} | ${0} | ${0} | ${'NO'}
    ${3} | ${8} | ${5} | ${3} | ${'YES'}
  `('Base test: $n', ({ a, b, c, result }) => {
    expect(mightGetTen(a, b, c)).toBe(result);
  });
});
