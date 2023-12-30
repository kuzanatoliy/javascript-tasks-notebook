const { getCountOfWordsInInterestingStory } = require('./C');

describe('1551C. Interesting Story', () => {
  it.each`
    n    | strings                          | result
    ${1} | ${['bac', 'aaada', 'e']}         | ${3}
    ${2} | ${['aba', 'abcde', 'aba']}       | ${2}
    ${3} | ${['baba', 'baba']}              | ${0}
    ${4} | ${['ab', 'ab', 'c', 'bc']}       | ${2}
    ${5} | ${['cbdca', 'd', 'a', 'd', 'e']} | ${3}
    ${6} | ${['b', 'c', 'ca']}              | ${2}
  `('Base test: $n', ({ strings, result }) => {
    expect(getCountOfWordsInInterestingStory(strings)).toBe(result);
  });
});
