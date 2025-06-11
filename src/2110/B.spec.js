const { isItPossibleToDestroy } = require('./B');

describe('2110B. Down with Brackets', () => {
  it.each`
    n    | map           | result
    ${1} | ${'(())'}     | ${'NO'}
    ${2} | ${'(())()()'} | ${'YES'}
    ${3} | ${'()'}       | ${'NO'}
    ${4} | ${'(())(())'} | ${'YES'}
  `('Base test: $n', ({ map, result }) => {
    expect(isItPossibleToDestroy(map)).toBe(result);
  });
});
