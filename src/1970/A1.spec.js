const { transformString } = require('./A1');

describe('1970A1. Balanced Shuffle (Easy)', () => {
  it.each`
    n    | str           | result
    ${1} | ${'(()(()))'} | ${'()(()())'}
  `('Base test: $n', ({ str, result }) => {
    expect(transformString(str)).toBe(result);
  });
});
