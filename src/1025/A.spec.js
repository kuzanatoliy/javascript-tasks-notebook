const { isItPossibleToRecolor } = require('./A');

describe('1025A. Doggo Recoloring', () => {
  it.each`
    n    | str         | result
    ${1} | ${'aabddc'} | ${'YES'}
    ${2} | ${'abc'}    | ${'NO'}
    ${3} | ${'jjj'}    | ${'YES'}
    ${4} | ${'d'}      | ${'YES'}
  `('Base test: $n', ({ str, result }) => {
    expect(isItPossibleToRecolor(str)).toBe(result);
  });
});
