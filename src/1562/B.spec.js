const { transformNumber } = require('./B');

describe('1562B. Scenes From a Memory', () => {
  it.each`
    n    | snum                                | result
    ${1} | ${'237'}                            | ${'27'}
    ${2} | ${'44444'}                          | ${'4'}
    ${3} | ${'221'}                            | ${'1'}
    ${4} | ${'35'}                             | ${'35'}
    ${5} | ${'773'}                            | ${'77'}
    ${6} | ${'4'}                              | ${'4'}
    ${7} | ${'626221626221626221626221626221'} | ${'6'}
  `('Base test: $n', ({ snum, result }) => {
    expect(transformNumber(snum)).toBe(result);
  });
});
