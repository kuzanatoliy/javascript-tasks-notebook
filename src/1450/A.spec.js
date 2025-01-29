const { getPermutationOfCharacters } = require('./A');

describe('1450A. Avoid Trygub', () => {
  it.each`
    n    | str                      | result
    ${1} | ${'antontrygub'}         | ${'abgnnorttuy'}
    ${2} | ${'bestcoordinator'}     | ${'abcdeinooorrstt'}
    ${3} | ${'trywatchinggurabruh'} | ${'aabcgghhinrrrttuuwy'}
  `('Base test: $n', ({ str, result }) => {
    expect(getPermutationOfCharacters(str)).toBe(result);
  });
});
