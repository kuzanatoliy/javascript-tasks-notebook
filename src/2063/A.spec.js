const { getCountOfMinComprimeSegments } = require('./A');

describe('2063A. Minimal Coprime', () => {
  it.each`
    n    | l       | r        | result
    ${1} | ${1}    | ${2}     | ${1}
    ${2} | ${1}    | ${10}    | ${9}
    ${3} | ${49}   | ${49}    | ${0}
    ${4} | ${69}   | ${420}   | ${351}
    ${5} | ${1}    | ${1}     | ${1}
    ${6} | ${9982} | ${44353} | ${34371}
  `('Base test: $n', ({ l, r, result }) => {
    expect(getCountOfMinComprimeSegments(l, r)).toBe(result);
  });
});
