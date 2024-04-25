const { getMinNumber } = require('./A');

describe('514A. Chewbaсca and Number', () => {
  it.each`
    n    | strNum        | result
    ${1} | ${'27'}       | ${'22'}
    ${2} | ${'4545'}     | ${'4444'}
    ${3} | ${'9'}        | ${'9'}
    ${4} | ${'91730629'} | ${'91230320'}
  `('Base test: $n', ({ strNum, result }) => {
    expect(getMinNumber(strNum)).toBe(result);
  });
});
