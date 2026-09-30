const { isItPossibleToReorder } = require('./B');

describe('988B. Substrings Sort', () => {
  it.each`
    n    | strs                                     | result
    ${1} | ${['a', 'aba', 'abacaba', 'ba', 'aba']}  | ${['YES', ['a', 'ba', 'aba', 'aba', 'abacaba']]}
    ${2} | ${['a', 'abacaba', 'ba', 'aba', 'abab']} | ${['NO']}
    ${3} | ${['qwerty', 'qwerty', 'qwerty']}        | ${['YES', ['qwerty', 'qwerty', 'qwerty']]}
  `('Base test: $n', ({ strs, result }) => {
    expect(isItPossibleToReorder(strs)).toStrictEqual(result);
  });
});
