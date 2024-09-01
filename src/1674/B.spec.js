const { getWordNumber } = require('./B');

describe('1674B. Dictionary', () => {
  it.each`
    n    | string  | result
    ${1} | ${'ab'} | ${1}
    ${2} | ${'ac'} | ${2}
    ${3} | ${'az'} | ${25}
    ${4} | ${'ba'} | ${26}
    ${5} | ${'bc'} | ${27}
    ${6} | ${'zx'} | ${649}
    ${7} | ${'zy'} | ${650}
  `('Base test: $n', ({ string, result }) => {
    expect(getWordNumber(string)).toBe(result);
  });
});
