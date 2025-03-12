const { getOriginalWord } = require('./B');

describe('831B. Keyboard Layouts', () => {
  it.each`
    n    | kb1                             | kb2                             | word                  | result
    ${1} | ${'qwertyuiopasdfghjklzxcvbnm'} | ${'veamhjsgqocnrbfxdtwkylupzi'} | ${'TwccpQZAvb2017'}   | ${'HelloVKCup2017'}
    ${1} | ${'mnbvcxzlkjhgfdsapoiuytrewq'} | ${'asdfghjklqwertyuiopzxcvbnm'} | ${'7abaCABAABAcaba7'} | ${'7uduGUDUUDUgudu7'}
  `('Base test: $n', ({ kb1, kb2, word, result }) => {
    expect(getOriginalWord(kb1, kb2, word)).toBe(result);
  });
});
