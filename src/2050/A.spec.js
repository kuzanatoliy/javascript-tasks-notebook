const { getCountOfWords } = require('./A');

describe('2050A. Line Breaks', () => {
  it.each`
    n    | strs                                       | l     | result
    ${1} | ${['a', 'b', 'c']}                         | ${1}  | ${1}
    ${2} | ${['alpha', 'beta']}                       | ${9}  | ${2}
    ${3} | ${['hello', 'world', 'and', 'codeforces']} | ${12} | ${2}
    ${4} | ${['ab', 'c', 'd']}                        | ${2}  | ${1}
    ${5} | ${['abc', 'ab', 'a']}                      | ${2}  | ${0}
  `('Base test: $n', ({ strs, l, result }) => {
    expect(getCountOfWords(strs, l)).toBe(result);
  });
});
