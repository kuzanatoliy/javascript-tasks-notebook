const { getCountOfLettersOrImpossible } = require('./A');

describe('844A. Diversity', () => {
  it.each`
    n    | str         | k    | result
    ${1} | ${'yandex'} | ${6} | ${0}
    ${2} | ${'yahoo'}  | ${5} | ${1}
    ${3} | ${'google'} | ${7} | ${'impossible'}
  `('Base test: $n', ({ str, k, result }) => {
    expect(getCountOfLettersOrImpossible(str, k)).toBe(result);
  });
});
