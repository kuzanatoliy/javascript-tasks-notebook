const { getCountOfDigitsCharacter } = require('./A');

describe('1560A. Dislike of Threes', () => {
  it.each`
    n    | number  | result
    ${1} | ${22}   | ${13}
    ${2} | ${9999} | ${90}
    ${3} | ${1}    | ${1}
    ${4} | ${777}  | ${66}
  `('Base test: $n', ({ number, result }) => {
    expect(getCountOfDigitsCharacter(number)).toBe(result);
  });
});
