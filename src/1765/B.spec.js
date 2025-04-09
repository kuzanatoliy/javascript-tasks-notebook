const { canWordBePrinted } = require('./B');

describe('1765B. Broken Keyboard', () => {
  it.each`
    n    | word        | result
    ${1} | ${'ossu'}   | ${'YES'}
    ${2} | ${'aa'}     | ${'NO'}
    ${3} | ${'addonn'} | ${'YES'}
    ${4} | ${'qwe'}    | ${'NO'}
  `('Base test: $n', ({ word, result }) => {
    expect(canWordBePrinted(word)).toBe(result);
  });
});
