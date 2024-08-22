const { getTransformationType } = require('./B');

describe('448B. Suffix Structures', () => {
  it.each`
    n    | str1           | str2       | result
    ${1} | ${'automaton'} | ${'tomat'} | ${'automaton'}
    ${2} | ${'array'}     | ${'arary'} | ${'array'}
    ${3} | ${'both'}      | ${'hot'}   | ${'both'}
    ${4} | ${'need'}      | ${'tree'}  | ${'need tree'}
  `('Base test: $n', ({ str1, str2, result }) => {
    expect(getTransformationType(str1, str2)).toBe(result);
  });
});
