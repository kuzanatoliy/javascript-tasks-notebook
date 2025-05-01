const { getWord } = require('./A');

describe('2094A. Trippi Troppi', () => {
  it.each`
    n    | line                       | result
    ${1} | ${'united states america'} | ${'usa'}
    ${2} | ${'oh my god'}             | ${'omg'}
    ${3} | ${'i cant lie'}            | ${'icl'}
    ${4} | ${'binary indexed tree'}   | ${'bit'}
    ${5} | ${'believe in yourself'}   | ${'biy'}
    ${6} | ${'skibidi slay sigma'}    | ${'sss'}
    ${7} | ${'god bless america'}     | ${'gba'}
  `('Base test: $n', ({ line, result }) => {
    expect(getWord(line)).toBe(result);
  });
});
