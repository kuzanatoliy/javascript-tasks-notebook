const { getBracketSequences } = require('./A');

describe('1574A. Regular Bracket Sequences', () => {
  it.each`
    n    | str  | result
    ${1} | ${3} | ${['()()()', '(())()', '((()))']}
    ${2} | ${1} | ${['()']}
    ${3} | ${3} | ${['()()()', '(())()', '((()))']}
  `('Base test: $n', ({ str, result }) => {
    expect(getBracketSequences(str)).toStrictEqual(result);
  });
});
