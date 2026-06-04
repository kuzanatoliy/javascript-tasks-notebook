const { isItPossibleToReorder } = require('./B');

describe('2227A. Koshary', () => {
  it.each`
    n    | map         | result
    ${1} | ${'()'}     | ${'YES'}
    ${2} | ${')('}     | ${'YES'}
    ${3} | ${'((('}    | ${'NO'}
    ${4} | ${'())(()'} | ${'YES'}
    ${5} | ${'(()('}   | ${'NO'}
    ${6} | ${')()()'}  | ${'NO'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToReorder(map)).toBe(result);
  });
});
