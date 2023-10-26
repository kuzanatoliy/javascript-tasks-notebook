const { canChat } = require('./A');

describe('236A. Boy or Girl', () => {
  it.each`
    n    | word            | result
    ${1} | ${'wjmzbmr'}    | ${'CHAT WITH HER!'}
    ${2} | ${'xiaodao'}    | ${'IGNORE HIM!'}
    ${3} | ${'sevenkplus'} | ${'CHAT WITH HER!'}
  `('Base test: $n', ({ word, result }) => {
    expect(canChat(word)).toBe(result);
  });
});
