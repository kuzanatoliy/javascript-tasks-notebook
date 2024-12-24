const { getCountOfMonkey } = require('./C');

describe('2044C. Hard Problem', () => {
  it.each`
    n    | m      | a     | b     | c     | result
    ${1} | ${10}  | ${5}  | ${5}  | ${10} | ${20}
    ${2} | ${3}   | ${6}  | ${1}  | ${1}  | ${5}
    ${3} | ${15}  | ${14} | ${12} | ${4}  | ${30}
    ${4} | ${1}   | ${1}  | ${1}  | ${1}  | ${2}
    ${5} | ${420} | ${6}  | ${9}  | ${69} | ${84}
  `('Base test: $n', ({ m, a, b, c, result }) => {
    expect(getCountOfMonkey(m, a, b, c)).toBe(result);
  });
});
